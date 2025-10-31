"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"

export default function UIExamples() {
  const [sliderValue, setSliderValue] = useState([50])
  const [rangeValue, setRangeValue] = useState([25, 75])
  const [badges, setBadges] = useState([
    { id: "1", text: "React", variant: "default" as const },
    { id: "2", text: "Next.js", variant: "secondary" as const },
    { id: "3", text: "Tailwind", variant: "outline" as const },
    { id: "4", text: "TypeScript", variant: "info" as const },
  ])

  const removeBadge = (id: string) => {
    setBadges(badges.filter((badge) => badge.id !== id))
  }

  return (
    <div className="p-6 space-y-12">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Badge Component</h2>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Badge Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Badge Sizes</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge size="sm">Small</Badge>
            <Badge>Default</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Badge Shapes</h3>
          <div className="flex flex-wrap gap-3">
            <Badge>Rounded Full</Badge>
            <Badge rounded="md">Rounded Medium</Badge>
            <Badge rounded="sm">Rounded Small</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Removable Badges</h3>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <Badge key={badge.id} variant={badge.variant} removable onRemove={() => removeBadge(badge.id)}>
                {badge.text}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Slider Component</h2>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Basic Slider</h3>
          <div className="w-full max-w-md">
            <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
            <p className="mt-2 text-sm text-muted-foreground">Value: {sliderValue[0]}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Slider with Tooltip</h3>
          <div className="w-full max-w-md">
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={1}
              showTooltip
              formatTooltip={(value) => `${value}%`}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Range Slider</h3>
          <div className="w-full max-w-md">
            <Slider value={rangeValue} onValueChange={setRangeValue} max={100} step={1} showTooltip />
            <p className="mt-2 text-sm text-muted-foreground">
              Range: {rangeValue[0]} - {rangeValue[1]}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Slider with Marks</h3>
          <div className="w-full max-w-md">
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={1}
              showMarks
              marks={[
                { value: 0, label: "0%" },
                { value: 25, label: "25%" },
                { value: 50, label: "50%" },
                { value: 75, label: "75%" },
                { value: 100, label: "100%" },
              ]}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Vertical Slider</h3>
          <div className="h-64 py-4">
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={1}
              orientation="vertical"
              showTooltip
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
