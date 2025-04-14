import { NextResponse } from 'next/server';
import { Message } from 'ai';

// Mock data for legal tools
const mockClients = [
  {
    id: '1',
    name: 'John Smith',
    email: 'j.smith@email.com',
    phone: '(555) 123-4567',
    address: '123 Main St., Anytown, US 12345',
    cases: [
      {
        id: '12345',
        type: 'Personal Injury',
        status: 'Discovery Phase',
        filed: 'Jan 15, 2025',
        attorney: 'Sarah Johnson'
      }
    ]
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 's.johnson@email.com',
    phone: '(555) 987-6543',
    address: '456 Oak Ave., Anytown, US 12345',
    cases: [
      {
        id: '23456',
        type: 'Contract Dispute',
        status: 'Pre-Filing',
        filed: 'N/A',
        attorney: 'Michael Williams'
      }
    ]
  }
];

// Mock function to process user queries
function processQuery(message: string) {
  const lowerMessage = message.toLowerCase();
  
  // Check for client information requests
  if (lowerMessage.includes('john smith') || lowerMessage.includes('smith')) {
    const client = mockClients[0];
    return `Here's what I found for John Smith:
- Case #${client.cases[0].id}: ${client.cases[0].type}
- Status: ${client.cases[0].status}
- Filed: ${client.cases[0].filed}
- Assigned Attorney: ${client.cases[0].attorney}

Would you like me to retrieve any additional information about this case?`;
  }
  
  // Check for case status requests
  if (lowerMessage.includes('case status') || lowerMessage.includes('status')) {
    return `I can check case statuses for you. Please specify which client you're inquiring about.`;
  }
  
  // Check for calendar or schedule requests
  if (lowerMessage.includes('calendar') || lowerMessage.includes('schedule') || lowerMessage.includes('appointment')) {
    return `Today's schedule:
- 9:00 AM - Team Meeting
- 11:30 AM - Client Call: J. Smith
- 2:00 PM - Court Appearance

Would you like me to schedule a new appointment?`;
  }
  
  // Check for email requests
  if (lowerMessage.includes('email') || lowerMessage.includes('mail')) {
    return `I can help you with emails. Would you like me to:
1. Check your recent emails
2. Draft a new email
3. Search for specific emails

Please let me know what you'd prefer.`;
  }
  
  // Default response for other queries
  return `I'm your WG Law Internal Assistant. I can help you with:
- Client information and case status
- Calendar and scheduling
- Emails and communications
- Legal research
- Document drafting

How can I assist you today?`;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // Get the last user message
    const lastUserMessage = messages.filter((m: Message) => m.role === 'user').pop();
    
    if (!lastUserMessage) {
      return NextResponse.json(
        { error: 'No user message found' },
        { status: 400 }
      );
    }
    
    // Process the user's query and generate a response
    const responseContent = processQuery(lastUserMessage.content);
    
    // Return the AI response
    return NextResponse.json({
      role: 'assistant',
      content: responseContent,
    });
    
  } catch (error) {
    console.error('Error processing chat request:', error);
    return NextResponse.json(
      { error: 'Error processing your request' },
      { status: 500 }
    );
  }
}
