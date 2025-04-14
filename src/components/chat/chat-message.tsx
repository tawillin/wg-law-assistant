"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export interface ChatMessageProps {
  text: string;
}

export const UserMessage = ({ text }: ChatMessageProps) => {
  return <div className="flex justify-end mb-4">
    <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 max-w-[80%]">
      {text}
    </div>
  </div>;
};

export const AssistantMessage = ({ text }: ChatMessageProps) => {
  return <div className="flex justify-start mb-4">
    <div className="bg-muted rounded-lg px-4 py-2 max-w-[80%]">
      {text.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  </div>;
};
