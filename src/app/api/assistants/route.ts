import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/openai';
import { assistantId } from '@/lib/assistant-config';

export const runtime = "nodejs";

// Create a new assistant if one doesn't exist
export async function GET() {
  try {
    // If we don't have an assistant ID, create one
    if (!assistantId) {
      const assistant = await openai.beta.assistants.create({
        name: "WG Law Internal Assistant",
        instructions: `You are "WG Law Internal Assistant", an AI-powered operations facilitator for a law firm. 
Your purpose is to help WG Law team members manage client information, communications, schedules, and documents efficiently.

You have access to the following tools and data sources:
- Lawmatics CRM – for client contact info, case status, notes, and tasks.
- Gmail – for emails (read/write).
- Google Calendar – for scheduling and viewing important dates.
- RingCentral – for call transcripts and voicemails.
- Westlaw – for legal research (case law, statutes) and document drafting context.

Capabilities:
- Retrieve any client's information or case details from the CRM when asked.
- Summarize call transcripts or lengthy communications into concise notes.
- Draft and refine legal documents or emails upon request, incorporating relevant factual and legal info.
- Create and update calendar events or tasks.
- Suggest appropriate next actions or responses in ongoing matters.`,
        model: "gpt-4o",
        tools: [
          { type: "code_interpreter" },
          { type: "file_search" },
          { 
            type: "function",
            function: {
              name: "search_client_information",
              description: "Search for client information in the Lawmatics CRM",
              parameters: {
                type: "object",
                properties: {
                  client_name: {
                    type: "string",
                    description: "The name of the client to search for"
                  }
                },
                required: ["client_name"]
              }
            }
          },
          {
            type: "function",
            function: {
              name: "get_calendar_events",
              description: "Get calendar events from Google Calendar",
              parameters: {
                type: "object",
                properties: {
                  date: {
                    type: "string",
                    description: "The date to get events for in YYYY-MM-DD format"
                  }
                },
                required: ["date"]
              }
            }
          }
        ]
      });
      
      // Return the assistant details
      return NextResponse.json({ 
        assistantId: assistant.id,
        message: "New assistant created successfully" 
      });
    }
    
    // If we already have an assistant ID, return it
    return NextResponse.json({ 
      assistantId,
      message: "Using existing assistant" 
    });
  } catch (error) {
    console.error('Error creating assistant:', error);
    return NextResponse.json(
      { error: 'Failed to create assistant' },
      { status: 500 }
    );
  }
}
