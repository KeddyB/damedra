"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface SpotifyPlayerProps {
  title: string
  description: string
  spotifyTrackId: string
  tags?: string[]
}

export default function SpotifyPlayer({ title, description, spotifyTrackId, tags = [] }: SpotifyPlayerProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="w-full">
          <iframe
            style={{ borderRadius: "12px" }}
            src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator`}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}
