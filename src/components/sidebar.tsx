"use client"

import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  MessageSquare, 
  Users, 
  Calendar, 
  Mail, 
  Phone, 
  BookOpen, 
  Settings 
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const navItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: MessageSquare, label: 'Chat', href: '/chat' },
    { icon: Users, label: 'Clients', href: '/clients' },
    { icon: Calendar, label: 'Calendar', href: '/calendar' },
    { icon: Mail, label: 'Emails', href: '/emails' },
    { icon: Phone, label: 'Calls', href: '/calls' },
    { icon: BookOpen, label: 'Legal Research', href: '/research' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  const recentChats = [
    { id: '1', name: 'John Smith Case' },
    { id: '2', name: 'Court Filing Prep' },
    { id: '3', name: 'Client Meeting' },
  ];

  return (
    <div className={`w-64 bg-slate-50 dark:bg-slate-900 border-r flex flex-col h-full ${className}`}>
      <div className="p-4 border-b">
        <h1 className="font-bold text-xl">WG LAW ASSISTANT</h1>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <h2 className="font-semibold mb-2">Recent Chats</h2>
        <ul className="space-y-1">
          {recentChats.map((chat) => (
            <li key={chat.id}>
              <Link 
                href={`/chat/${chat.id}`}
                className="block px-3 py-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                {chat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
