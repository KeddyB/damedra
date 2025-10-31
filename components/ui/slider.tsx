"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showTooltip?: boolean
  formatTooltip?: (value: number) => string
  showMarks?: boolean
  marks?: { value: number; label?: string }[]
  orientation?: "horizontal" | "vertical"
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    {
      className,
      showTooltip = false,
      formatTooltip = (value) => `${value}`,
      showMarks = false,
      marks = [],
      orientation = "horizontal",
      ...props
    },
    ref,
  ) => {
    const [hoveredThumb, setHoveredThumb] = React.useState<number | null>(null)
    const isVertical = orientation === "vertical"

    return (
      <div className={cn("relative", isVertical ? "h-full" : "w-full", className)}>
        <SliderPrimitive.Root
          ref={ref}
          className={cn(
            "relative flex touch-none select-none items-center",
            isVertical ? "h-full flex-col" : "w-full",
            className,
          )}
          orientation={orientation}
          {...props}
        >
          <SliderPrimitive.Track
            className={cn(
              "relative grow overflow-hidden rounded-full bg-secondary",
              isVertical ? "w-2 h-full" : "h-2 w-full",
            )}
          >
            <SliderPrimitive.Range className="absolute bg-primary rounded-full h-full" />
          </SliderPrimitive.Track>

          {props.value?.map((_, index) => (
            <SliderPrimitive.Thumb
              key={index}
              className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              onMouseEnter={() => setHoveredThumb(index)}
              onMouseLeave={() => setHoveredThumb(null)}
            >
              {showTooltip && hoveredThumb === index && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs py-1 px-2 rounded shadow whitespace-nowrap">
                  {formatTooltip(props.value?.[index] || 0)}
                </div>
              )}
            </SliderPrimitive.Thumb>
          ))}
        </SliderPrimitive.Root>

        {showMarks && marks.length > 0 && (
          <div className={cn("relative w-full mt-1", isVertical ? "h-full" : "w-full")}>
            {marks.map((mark, index) => {
              // Calculate position as percentage
              const position = ((mark.value - (props.min || 0)) / ((props.max || 100) - (props.min || 0))) * 100

              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center"
                  style={{
                    [isVertical ? "bottom" : "left"]: `${position}%`,
                    transform: isVertical ? "translateY(50%)" : "translateX(-50%)",
                  }}
                >
                  <div className="w-1 h-2 bg-muted-foreground/50" />
                  {mark.label && <span className="text-xs text-muted-foreground mt-1">{mark.label}</span>}
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  },
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
