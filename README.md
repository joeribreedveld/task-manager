# Task Manager

A simple task management application for creating, updating, and deleting tasks.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser to manage your tasks.

## Features

- **Create Tasks**: Add new tasks.
- **Update Tasks**: Edit task titles and statuses.
- **Delete Tasks**: Remove completed or unnecessary tasks.
- **Task Status**: Manage tasks with statuses like "Todo," "In Progress," and "Done."

## Project Structure

- `.next/` - Build output and cache for Next.js.
- `drizzle/` - Configuration and database files.
- `src/` - Main source code.
  - `app/` - Application pages and layouts.
  - `components/` - Reusable UI components.
  - `db/` - Database schema and logic.
  - `lib/` - Utility functions and server actions.
- `public/` - Static assets like images and icons.
- Configuration files (e.g., `tailwind.config.ts`, `tsconfig.json`).

## Scripts

- `dev` - Start the development server.
- `build` - Create a production build.
- `start` - Start the production server.
- `lint` - Check code for linting errors.
- `format` - Format code with Prettier.

## Deployment

Deploy on [Vercel](https://vercel.com/) with ease. Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
