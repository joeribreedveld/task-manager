"use client";

import DeleteTaskDialog from "@/components/delete-task-dialog";
import EditTaskDialog from "@/components/edit-task-dialog";
import Status from "@/components/status";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TTask } from "@/db/schema";
import { EllipsisIcon } from "lucide-react";
import { useState } from "react";

export default function Task({ task }: { task: TTask }) {
  const [isDeleteTaskDialogOpen, setIsDeleteTaskDialogOpen] = useState(false);
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      key={task.id}
      className="flex flex-col gap-3 rounded-xl border bg-white p-5 sm:p-6"
    >
      <div className="flex w-full items-center justify-between">
        <Status status={task.status} />

        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
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
            <DropdownMenuItem
              onMouseDown={() => {
                setIsOpen(false);
                setIsEditTaskDialogOpen(true);
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onMouseDown={() => {
                setIsOpen(false);
                setIsDeleteTaskDialogOpen(true);
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DeleteTaskDialog
          id={task.id}
          isOpen={isDeleteTaskDialogOpen}
          setIsOpen={setIsDeleteTaskDialogOpen}
        />
        <EditTaskDialog
          task={task}
          isOpen={isEditTaskDialogOpen}
          setIsOpen={setIsEditTaskDialogOpen}
        />
      </div>
      <p className="text-sm">{task.title}</p>
    </li>
  );
}
