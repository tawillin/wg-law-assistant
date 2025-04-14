import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/openai';
import { assistantId } from '@/lib/assistant-config';

export const runtime = "nodejs";

// Send a new message to a thread
export async function POST(
  request: NextRequest,
) {
  try {
    const { content } = await request.json();
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const threadId = pathParts[pathParts.indexOf('threads') + 1];

    // Add the user message to the thread
    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: content,
    });

    // Create a run with the assistant
    const stream = openai.beta.threads.runs.stream(threadId, {
      assistant_id: assistantId,
    });

    // Return the stream as a response
    return new Response(stream.toReadableStream());
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
