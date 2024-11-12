import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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
        <Badge variant="secondary">{task.status}</Badge>
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
          <DropdownMenuContent align="start" className="w-32">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup value="todo">
                    <DropdownMenuRadioItem value="todo">
                      Todo
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="progress">
                      Progress
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="complete">
                      Complete
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="text-sm">{task.title}</p>
    </li>
  );
}
