# Task Manager

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is a simple task management application that allows users to create, update, and delete tasks.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start managing your tasks by navigating to the homepage. The page auto-updates as you edit the files.

## Features

- **Create Tasks**: Add new tasks to keep track of your work.
- **Update Tasks**: Edit the title and status of existing tasks.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Task Status**: Tasks can have statuses like "Todo", "In Progress", and "Done".

## Project Structure

- `.next/` - Contains the build output and cache for Next.js.
- `drizzle/` - Configuration and files related to Drizzle.
- `public/` - Static assets like images, fonts, etc.
- `src/` - The main source code for the application.
  - `components/` - React components used in the application.
  - `db/` - Database schema and configuration.
  - `lib/` - Utility functions and server actions.
  - `app/` - Application-specific files like global styles and layout.
- `tailwind.config.ts` - Configuration file for Tailwind CSS.
- `next.config.ts` - Configuration file for Next.js.
- `tsconfig.json` - TypeScript configuration file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
