"use client";

import NewTaskForm from "@/components/new-task-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function NewTaskDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onMouseDown={() => setIsOpen(true)}>
        <Button className="text-white">New Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
          <DialogDescription>
            Create a new task to keep track of your work.
          </DialogDescription>
        </DialogHeader>
        <NewTaskForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
