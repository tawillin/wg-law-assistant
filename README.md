# WG Law Internal Assistant

This is a web application that serves as an AI-powered operations facilitator for a law firm. It integrates with various tools like Lawmatics CRM, Gmail, Google Calendar, RingCentral, and Westlaw to help manage client information, communications, schedules, and documents efficiently.

## Features

- ChatGPT-like interface powered by OpenAI's GPT-4o
- Integration with legal tools (planned for future enhancement)
- Responsive design for desktop and mobile
- Real-time AI responses with persistent conversation context

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/wg-law-assistant.git
cd wg-law-assistant
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenAI API key
```
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This application is deployed on Vercel. To deploy your own instance:

1. Push your code to a GitHub repository
2. Import the repository to Vercel
3. Set the environment variables in Vercel dashboard
4. Deploy

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [OpenAI API](https://openai.com/) - For AI capabilities
- [Tailwind CSS](https://tailwindcss.com/) - For styling

## License

This project is licensed under the MIT License
