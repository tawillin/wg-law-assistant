# WG Law Internal Assistant Deployment Guide

This document provides a comprehensive guide for deploying the WG Law Internal Assistant application to GitHub and connecting it to Vercel for permanent hosting.

## Prerequisites
- GitHub account
- Vercel account (can sign up with GitHub)
- OpenAI API key

## Step 1: Create a GitHub Repository
1. Go to GitHub.com and sign in to your account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "wg-law-assistant")
4. Add a description: "AI-powered assistant for WG Law firm operations"
5. Choose "Private" if you want to keep your code private, or "Public" if you want it to be open source
6. Leave the "Initialize this repository with a README" option unchecked
7. Click "Create repository"

## Step 2: Push Your Local Repository to GitHub
After creating the repository, GitHub will show instructions. You'll need to:

1. Copy the repository URL (it will look like: https://github.com/yourusername/wg-law-assistant.git)
2. In your local environment, run these commands (replacing the URL with yours):
   ```
   git remote add origin https://github.com/yourusername/wg-law-assistant.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Connect to Vercel
1. Go to Vercel.com and sign in with your GitHub account
2. Click "Add New..." and select "Project"
3. Find and select your "wg-law-assistant" repository
4. Vercel will automatically detect that it's a Next.js project
5. Before deploying, add your environment variable:
   - Click "Environment Variables"
   - Add a variable named "OPENAI_API_KEY" with your API key as the value
   - Make sure it's available in all environments (Production, Preview, Development)
6. Click "Deploy"

## Step 4: Access Your Deployed Application
1. Vercel will build and deploy your application (this takes a few minutes)
2. Once complete, you'll get a URL (like wg-law-assistant.vercel.app)
3. This is your permanent deployment that will automatically update whenever you push changes to your GitHub repository

## Step 5: Set Up a Custom Domain (Optional)
1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain (e.g., assistant.wglaw.com)
3. Follow Vercel's instructions to configure your DNS settings

## Making Future Updates
To update your application in the future:

1. Make changes to your local repository
2. Commit the changes: `git commit -am "Description of changes"`
3. Push to GitHub: `git push origin main`
4. Vercel will automatically deploy the updates

## Troubleshooting
- If deployment fails, check the build logs in Vercel for specific errors
- Ensure your OpenAI API key is correctly set in the environment variables
- Verify that all dependencies are properly listed in package.json

## Security Considerations
- Keep your OpenAI API key secure and never commit it directly to your repository
- Consider implementing user authentication for the production version
- Regularly update dependencies to patch security vulnerabilities
