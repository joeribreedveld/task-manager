"use client";

import EditTaskForm from "@/components/edit-task-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TTask } from "@/db/schema";

export default function EditTaskDialog({
  task,
  isOpen,
  setIsOpen,
}: {
  task: TTask;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Update the title and status of the task.
          </DialogDescription>
        </DialogHeader>
        <EditTaskForm task={task} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
