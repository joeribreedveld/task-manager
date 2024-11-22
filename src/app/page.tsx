"use server";

import NewTaskDialog from "@/components/new-task-dialog";
import TaskList from "@/components/task-list";
import { getTasks } from "@/lib/actions";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <>
      <div className="mx-auto min-h-full w-full max-w-3xl md:border-x">
        <header className="flex items-center justify-between border-b px-4 py-5 sm:px-12 sm:py-8">
          <h1 className="text-lg font-semibold">Task Manager</h1>
          <NewTaskDialog />
        </header>
        <main className="px-4 pb-5 pt-5 sm:px-12 sm:pb-12 sm:pt-8">
          <TaskList tasks={tasks} />
        </main>
      </div>
    </>
  );
}
