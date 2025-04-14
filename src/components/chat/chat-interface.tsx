"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Message } from 'ai';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { AssistantMessage, UserMessage } from './chat-message';

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Welcome to WG Law Assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState('');
  
  // Automatically scroll to bottom of chat
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Create a new thread when chat component is created
  useEffect(() => {
    const createThread = async () => {
      try {
        const res = await fetch('/api/assistants/threads', {
          method: 'POST',
        });
        
        if (!res.ok) {
          throw new Error('Failed to create thread');
        }
        
        const data = await res.json();
        setThreadId(data.threadId);
        
        // Initialize the assistant if needed
        await fetch('/api/assistants', {
          method: 'GET',
        });
      } catch (error) {
        console.error('Error initializing chat:', error);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'assistant',
          content: 'Sorry, I encountered an error initializing the chat. Please try again later.'
        }]);
      }
    };
    
    createThread();
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !threadId) return;
    
    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInput('');
    
    try {
      // Send message to API
      const response = await fetch(`/api/assistants/threads/${threadId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: input })
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      // Handle streaming response
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No response body');
      }
      
      // Add an empty assistant message that we'll update with the stream
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: ''
      }]);
      
      // Process the stream
      const decoder = new TextDecoder();
      let done = false;
      let buffer = '';
      
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        
        if (value) {
          buffer += decoder.decode(value, { stream: true });
          
          // Process complete JSON objects from the buffer
          let startIdx = 0;
          let endIdx = buffer.indexOf('\n', startIdx);
          
          while (endIdx !== -1) {
            const line = buffer.substring(startIdx, endIdx).trim();
            startIdx = endIdx + 1;
            
            if (line.startsWith('data: ')) {
              const jsonStr = line.slice(6);
              
              if (jsonStr !== '[DONE]') {
                try {
                  const data = JSON.parse(jsonStr);
                  
                  // Handle different event types
                  if (data.type === 'text_delta' && data.delta?.value) {
                    // Append to the last message
                    setMessages(prev => {
                      const lastMessage = prev[prev.length - 1];
                      const updatedLastMessage = {
                        ...lastMessage,
                        content: lastMessage.content + data.delta.value
                      };
                      return [...prev.slice(0, -1), updatedLastMessage];
                    });
                  }
                } catch (e) {
                  console.error('Error parsing JSON:', e);
                }
              }
            }
            
            endIdx = buffer.indexOf('\n', startIdx);
          }
          
          // Keep the remaining part of the buffer
          buffer = buffer.substring(startIdx);
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error processing your request.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          message.role === 'user' ? (
            <UserMessage key={message.id} text={message.content} />
          ) : (
            <AssistantMessage key={message.id} text={message.content} />
          )
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1"
            disabled={isLoading || !threadId}
          />
          <Button type="submit" disabled={isLoading || !input.trim() || !threadId}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
