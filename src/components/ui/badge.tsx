import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.16em] uppercase transition-colors",
  {
    variants: {
      variant: {
        default: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
        sapphire: "border-blue-300/30 bg-blue-400/10 text-blue-100",
        slate: "border-white/10 bg-white/7 text-slate-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeProps = React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
