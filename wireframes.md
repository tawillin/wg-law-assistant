# WG Law Internal Assistant - Wireframes

## Chat Interface

```
+-------------------------------------------------------+
|                    WG LAW ASSISTANT                   |
+-------------------------------------------------------+
|                                                       |
|  +---------------------------------------------------+|
|  |                                                   ||
|  |  AI: Welcome to WG Law Assistant. How can I help  ||
|  |      you today?                                   ||
|  |                                                   ||
|  +---------------------------------------------------+|
|                                                       |
|  +---------------------------------------------------+|
|  |                                                   ||
|  |  User: Can you retrieve the case status for       ||
|  |        client John Smith?                         ||
|  |                                                   ||
|  +---------------------------------------------------+|
|                                                       |
|  +---------------------------------------------------+|
|  |                                                   ||
|  |  AI: I'll check the Lawmatics CRM for John Smith's||
|  |      case status.                                 ||
|  |                                                   ||
|  |      Here's what I found:                         ||
|  |      - Case #12345: Personal Injury               ||
|  |      - Status: Discovery Phase                    ||
|  |      - Last Updated: April 8, 2025                ||
|  |      - Assigned Attorney: Sarah Johnson           ||
|  |                                                   ||
|  |      Would you like me to retrieve any additional ||
|  |      information about this case?                 ||
|  |                                                   ||
|  +---------------------------------------------------+|
|                                                       |
|  +---------------------------------------------------+|
|  | Type your message...                   [Send] [📎] ||
|  +---------------------------------------------------+|
|                                                       |
+-------------------------------------------------------+
```

## Sidebar Navigation

```
+------------------------+--------------------------------+
| +--------------------+ |                                |
| |   WG LAW ASSISTANT | |                                |
| +--------------------+ |                                |
|                        |                                |
| [🏠] Dashboard          |                                |
| [💬] Chat               |                                |
| [👥] Clients            |                                |
| [📅] Calendar           |                                |
| [📧] Emails             |                                |
| [📞] Calls              |                                |
| [📚] Legal Research     |                                |
| [⚙️] Settings           |                                |
|                        |                                |
| +--------------------+ |                                |
| | Recent Chats       | |                                |
| +--------------------+ |                                |
| | John Smith Case    | |                                |
| | Court Filing Prep  | |                                |
| | Client Meeting     | |                                |
| +--------------------+ |                                |
|                        |                                |
+------------------------+--------------------------------+
```

## Dashboard

```
+-------------------------------------------------------+
|                    WG LAW ASSISTANT                   |
+-------------------------------------------------------+
|                                                       |
|  Welcome back, [User Name]                            |
|                                                       |
|  +-------------------+  +------------------------+    |
|  | Today's Schedule  |  | Recent Client Activity |    |
|  +-------------------+  +------------------------+    |
|  | 9:00 AM - Team    |  | • John Smith - Email   |    |
|  | Meeting           |  |   received (10 min ago)|    |
|  |                   |  |                        |    |
|  | 11:30 AM - Client |  | • Sarah Johnson - Call |    |
|  | Call: J. Smith    |  |   transcript updated   |    |
|  |                   |  |                        |    |
|  | 2:00 PM - Court   |  | • Michael Brown - Case |    |
|  | Appearance        |  |   status updated       |    |
|  +-------------------+  +------------------------+    |
|                                                       |
|  +-------------------+  +------------------------+    |
|  | Tasks Due Today   |  | Quick Actions          |    |
|  +-------------------+  +------------------------+    |
|  | • File motion for |  | [New Chat]             |    |
|  |   Smith case      |  |                        |    |
|  |                   |  | [Search Clients]       |    |
|  | • Review contract |  |                        |    |
|  |   for Johnson     |  | [Schedule Meeting]     |    |
|  |                   |  |                        |    |
|  | • Prepare for     |  | [Draft Email]          |    |
|  |   tomorrow's      |  |                        |    |
|  |   deposition      |  |                        |    |
|  +-------------------+  +------------------------+    |
|                                                       |
+-------------------------------------------------------+
```

## Client Information View

```
+-------------------------------------------------------+
|                    WG LAW ASSISTANT                   |
+-------------------------------------------------------+
|                                                       |
|  Client: John Smith                                   |
|                                                       |
|  +-------------------+  +------------------------+    |
|  | Contact Info      |  | Case Information       |    |
|  +-------------------+  +------------------------+    |
|  | Email:            |  | Case #12345            |    |
|  | j.smith@email.com |  | Personal Injury        |    |
|  |                   |  |                        |    |
|  | Phone:            |  | Status:                |    |
|  | (555) 123-4567    |  | Discovery Phase        |    |
|  |                   |  |                        |    |
|  | Address:          |  | Filed: Jan 15, 2025    |    |
|  | 123 Main St.      |  |                        |    |
|  | Anytown, US 12345 |  | Attorney: S. Johnson   |    |
|  +-------------------+  +------------------------+    |
|                                                       |
|  +-------------------+  +------------------------+    |
|  | Recent Activity   |  | Upcoming Events        |    |
|  +-------------------+  +------------------------+    |
|  | • Email received  |  | Apr 15 - Deposition    |    |
|  |   (10 min ago)    |  |                        |    |
|  |                   |  | May 3 - Settlement     |    |
|  | • Phone call      |  | Conference             |    |
|  |   (Yesterday)     |  |                        |    |
|  |                   |  | Jun 10 - Court Hearing |    |
|  | • Document filed  |  |                        |    |
|  |   (Apr 5, 2025)   |  |                        |    |
|  +-------------------+  +------------------------+    |
|                                                       |
|  [Chat about this client]    [View all documents]     |
|                                                       |
+-------------------------------------------------------+
```

## Settings Page

```
+-------------------------------------------------------+
|                    WG LAW ASSISTANT                   |
+-------------------------------------------------------+
|                                                       |
|  Settings                                             |
|                                                       |
|  +---------------------------------------------------+|
|  | API Connections                                   ||
|  +---------------------------------------------------+|
|  |                                                   ||
|  | Lawmatics CRM                                     ||
|  | [✓] Connected                                     ||
|  | Last synced: Today, 10:30 AM                      ||
|  | [Reconnect] [Test Connection]                     ||
|  |                                                   ||
|  | Gmail                                             ||
|  | [✓] Connected                                     ||
|  | Account: user@wglaw.com                           ||
|  | [Reconnect] [Test Connection]                     ||
|  |                                                   ||
|  | Google Calendar                                   ||
|  | [✓] Connected                                     ||
|  | Account: user@wglaw.com                           ||
|  | [Reconnect] [Test Connection]                     ||
|  |                                                   ||
|  | RingCentral                                       ||
|  | [✓] Connected                                     ||
|  | Account: WG Law Main                              ||
|  | [Reconnect] [Test Connection]                     ||
|  |                                                   ||
|  | Westlaw                                           ||
|  | [✓] Connected                                     ||
|  | Account: WG Law Subscription                      ||
|  | [Reconnect] [Test Connection]                     ||
|  |                                                   ||
|  +---------------------------------------------------+|
|                                                       |
|  +---------------------------------------------------+|
|  | User Preferences                                  ||
|  +---------------------------------------------------+|
|  |                                                   ||
|  | Theme: [Light ▼]                                  ||
|  |                                                   ||
|  | Notifications: [✓] Email  [✓] Browser            ||
|  |                                                   ||
|  | Default View: [Dashboard ▼]                       ||
|  |                                                   ||
|  +---------------------------------------------------+|
|                                                       |
|  [Save Changes]                                       |
|                                                       |
+-------------------------------------------------------+
```

## Mobile View (Chat Interface)

```
+----------------------+
|   WG LAW ASSISTANT   |
+----------------------+
| [☰]              [⚙️] |
+----------------------+
|                      |
| +------------------+ |
| |                  | |
| | AI: Welcome to   | |
| | WG Law Assistant.| |
| | How can I help   | |
| | you today?       | |
| |                  | |
| +------------------+ |
|                      |
| +------------------+ |
| |                  | |
| | User: Can you    | |
| | retrieve the case| |
| | status for client| |
| | John Smith?      | |
| |                  | |
| +------------------+ |
|                      |
| +------------------+ |
| |                  | |
| | AI: I'll check   | |
| | the Lawmatics CRM| |
| | for John Smith's | |
| | case status.     | |
| |                  | |
| | Here's what I    | |
| | found:           | |
| | - Case #12345:   | |
| |   Personal Injury| |
| | - Status:        | |
| |   Discovery Phase| |
| | - Last Updated:  | |
| |   April 8, 2025  | |
| | - Assigned       | |
| |   Attorney: Sarah| |
| |   Johnson        | |
| |                  | |
| +------------------+ |
|                      |
| +------------------+ |
| | Type message...  | |
| |              [➤] | |
| +------------------+ |
|                      |
+----------------------+
```
