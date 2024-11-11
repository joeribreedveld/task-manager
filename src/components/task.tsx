import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EllipsisIcon } from "lucide-react";

type Task = {
  id: number;
  title: string;
  status: "Todo" | "In Progress" | "Done";
};

export default function Task({ task }: { task: Task }) {
  return (
    <li
      key={task.id}
      className="flex flex-col gap-3 rounded-xl border bg-white p-6"
    >
      <div className="flex w-full items-center justify-between">
        <Badge variant="secondary">{task.status}</Badge>
        <Button size="icon" className="h-6 w-6 text-[#666666]" variant="ghost">
          <EllipsisIcon />
        </Button>
      </div>
      <p className="text-sm">{task.title}</p>
    </li>
  );
}
