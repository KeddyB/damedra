import { Play, ArrowRight, Mail, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ButtonExamples() {
  return (
    <div className="p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button variant="gradient">Gradient</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
          <Button size="icon">
            <Play className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Rounded Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Rounded</Button>
          <Button rounded="full">Fully Rounded</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button icon={<Play className="h-4 w-4" />}>Play Music</Button>
          <Button icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
            Next Step
          </Button>
          <Button variant="outline" icon={<Mail className="h-4 w-4" />}>
            Contact
          </Button>
          <Button variant="gradient" rounded="full" icon={<Music className="h-4 w-4" />}>
            Listen Now
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Loading State</h2>
        <div className="flex flex-wrap gap-4">
          <Button loading>Loading</Button>
          <Button variant="outline" loading>
            Processing
          </Button>
          <Button variant="gradient" loading>
            Submitting
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Unavailable
          </Button>
        </div>
      </div>
    </div>
  )
}
