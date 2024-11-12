import NewTask from "@/components/new-task";
import TaskList from "@/components/task-list";
import { TTask } from "@/lib/types";

export default function Home() {
  const tasks: TTask[] = [
    {
      id: 1,
      title: "Design homepage wireframe",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Setup backend server with Express.js",
      status: "Todo",
    },
    {
      id: 3,
      title: "Research user authentication methods",
      status: "Done",
    },
    {
      id: 4,
      title: "Implement responsive layout for login page",
      status: "In Progress",
    },
    {
      id: 5,
      title: "Write unit tests for API endpoints",
      status: "Todo",
    },
    {
      id: 6,
      title: "Create database schema for user profiles",
      status: "Done",
    },
    {
      id: 7,
      title: "Fix bug in navigation menu on mobile",
      status: "In Progress",
    },
    {
      id: 8,
      title: "Optimize page load speed for images",
      status: "Todo",
    },
    {
      id: 9,
      title: "Review PR for feature branch 'user-invitations'",
      status: "Todo",
    },
  ];

  const sortedTasks: TTask[] = tasks.sort((a, b) => {
    const order = { Todo: 1, "In Progress": 2, Done: 3 };
    return order[a.status] - order[b.status];
  });

  return (
    <>
      <div className="mx-auto h-full w-full max-w-3xl md:border-x">
        <header className="flex items-center justify-between border-b px-4 py-5 sm:px-12 sm:py-8">
          <h1 className="text-lg font-semibold">Task Manager</h1>
          <NewTask />
        </header>
        <main className="px-4 pb-5 pt-5 sm:border-b sm:px-12 sm:pb-12 sm:pt-8">
          <TaskList tasks={sortedTasks} />
        </main>
      </div>
    </>
  );
}
