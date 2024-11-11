import TaskList from "@/components/task-list";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="mx-auto h-full w-full max-w-3xl md:border-x">
        <header className="flex items-center justify-between border-b px-4 py-5 sm:px-12 sm:py-8">
          <h1 className="text-lg font-semibold">Task Manager</h1>
          <Button className="text-white">New Task</Button>
        </header>
        <main className="border-b px-4 pb-5 pt-5 sm:px-12 sm:pb-12 sm:pt-8">
          <TaskList />
        </main>
      </div>
    </>
  );
}
