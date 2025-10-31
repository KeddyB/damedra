"use client"

import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success: "border-transparent bg-green-500 text-white hover:bg-green-500/80",
        warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-500/80",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-500/80",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.25 text-xs",
        lg: "px-3 py-0.75 text-sm",
      },
      rounded: {
        default: "rounded-full",
        md: "rounded-md",
        sm: "rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  removable?: boolean
  onRemove?: () => void
}

function Badge({ className, variant, size, rounded, removable, onRemove, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size, rounded }), className)} {...props}>
      {children}
      {removable && (
        <button
          type="button"
          className="ml-1 -mr-1 h-3.5 w-3.5 rounded-full hover:bg-background/20 inline-flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation()
            onRemove?.()
          }}
          aria-label="Remove"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

export { Badge, badgeVariants }
