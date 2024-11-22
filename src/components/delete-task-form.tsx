"use client";

import { AlertDialogAction } from "@/components/ui/alert-dialog";
import { deleteTask } from "@/lib/actions";
import { LoaderIcon } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

export default function DeleteTaskForm({
  id,
  setIsOpen,
}: {
  id: number;
  setIsOpen: (open: boolean) => void;
}) {
  const [isPending, startTransition] = useTransition();

  const form = useForm();

  async function onSubmit() {
    startTransition(async () => {
      await deleteTask(id);

      setIsOpen(false);
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full sm:w-fit">
      <AlertDialogAction
        onMouseDown={() => form.handleSubmit(onSubmit)()}
        disabled={isPending}
        className="w-full"
      >
        {isPending && <LoaderIcon className="h-4 w-4 animate-spin" />}
        Delete
      </AlertDialogAction>
    </form>
  );
}
