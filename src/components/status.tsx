import { Badge } from "@/components/ui/badge";
import { TTask } from "@/lib/types";
import { cva, VariantProps } from "class-variance-authority";

const statusVariants = cva("font-medium", {
  variants: {
    status: {
      Todo: "bg-border",
      "In Progress": "bg-amber-100 text-amber-800",
      Done: "bg-green-100 text-green-800",
    },
  },
  defaultVariants: {
    status: "Todo",
  },
});

export interface StatusProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusVariants> {}

export default function Status({ status }: { status: TTask["status"] }) {
  return (
    <Badge variant="secondary" className={statusVariants({ status })}>
      {status}
    </Badge>
  );
}
