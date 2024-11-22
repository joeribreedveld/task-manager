"use client";

import DeleteTaskForm from "@/components/delete-task-form";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function DeleteTaskDialog({
  id,
  isOpen,
  setIsOpen,
}: {
  id: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the task.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <DeleteTaskForm id={id} setIsOpen={setIsOpen} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
