import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/openai';

export const runtime = "nodejs";

// Handle function call results
export async function POST(
  request: NextRequest,
) {
  try {
    const { runId, toolCallOutputs } = await request.json();
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const threadId = pathParts[pathParts.indexOf('threads') + 1];

    // Submit the tool outputs to the run
    const stream = openai.beta.threads.runs.submitToolOutputsStream(
      threadId,
      runId,
      {
        tool_outputs: toolCallOutputs,
      }
    );

    // Return the stream as a response
    return new Response(stream.toReadableStream());
  } catch (error) {
    console.error('Error submitting tool outputs:', error);
    return NextResponse.json(
      { error: 'Failed to submit tool outputs' },
      { status: 500 }
    );
  }
}
