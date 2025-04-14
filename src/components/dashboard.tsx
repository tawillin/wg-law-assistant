"use client"

import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Dashboard() {
  const todaySchedule = [
    { time: '9:00 AM', event: 'Team Meeting' },
    { time: '11:30 AM', event: 'Client Call: J. Smith' },
    { time: '2:00 PM', event: 'Court Appearance' },
  ];

  const recentActivity = [
    { client: 'John Smith', activity: 'Email received', time: '10 min ago' },
    { client: 'Sarah Johnson', activity: 'Call transcript updated', time: '1 hour ago' },
    { client: 'Michael Brown', activity: 'Case status updated', time: '3 hours ago' },
  ];

  const tasksDue = [
    { task: 'File motion for Smith case' },
    { task: 'Review contract for Johnson' },
    { task: 'Prepare for tomorrow\'s deposition' },
  ];

  const quickActions = [
    { label: 'New Chat', href: '/chat/new' },
    { label: 'Search Clients', href: '/clients/search' },
    { label: 'Schedule Meeting', href: '/calendar/new' },
    { label: 'Draft Email', href: '/emails/new' },
  ];

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-bold mb-6">Welcome back, User</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {todaySchedule.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="font-medium min-w-24">{item.time}</div>
                  <div>{item.event}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Client Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recentActivity.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <div className="font-medium">{item.client} - {item.activity}</div>
                  <div className="text-sm text-gray-500">{item.time}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Tasks Due Today</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {tasksDue.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <div>{item.task}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {quickActions.map((action, index) => (
              <Button key={index} asChild variant="outline" className="justify-start">
                <Link href={action.href}>{action.label}</Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
