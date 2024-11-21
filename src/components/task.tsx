import Status from "@/components/status";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
      className="flex flex-col gap-3 rounded-xl border bg-white p-5 sm:p-6"
    >
      <div className="flex w-full items-center justify-between">
        <Status status={task.status} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              className="h-6 w-6 text-muted-foreground"
              variant="ghost"
            >
              <EllipsisIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="text-sm">{task.title}</p>
    </li>
  );
}
