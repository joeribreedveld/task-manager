import Task from "./task";
import { TTask } from "@/db/schema";

export default function TaskList({ tasks }: { tasks: TTask[] }) {
  return (
    <ul className="flex flex-col gap-3 sm:gap-4">
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </ul>
  );
}
