import { Badge } from "@/components/ui/badge";
import { TTask } from "@/db/schema";
import { cva, VariantProps } from "class-variance-authority";

const statusVariants = cva("font-medium", {
  variants: {
    status: {
      todo: "bg-border",
      "in-progress": "bg-amber-100 text-amber-800",
      done: "bg-green-100 text-green-800",
    },
  },
  defaultVariants: {
    status: "todo",
  },
});

const statusses = {
  todo: "Todo",
  "in-progress": "In Progress",
  done: "Done",
};

export interface StatusProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusVariants> {}

export default function Status({ status }: { status: TTask["status"] }) {
  return (
    <Badge variant="secondary" className={statusVariants({ status })}>
      {status ? statusses[status] : "Unknown Status"}
    </Badge>
  );
}
