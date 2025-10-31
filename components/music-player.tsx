"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

interface MusicPlayerProps {
  title: string
  description: string
  imageUrl: string
  audioUrl: string
  tags: string[]
}

export default function MusicPlayer({ title, description, imageUrl, audioUrl, tags }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    // Events
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("ended", () => setIsPlaying(false))

    // Cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.muted = isMuted
    }
  }, [volume, isMuted])

  const togglePlayPause = () => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)

    if (!prevValue) {
      audioRef.current?.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioRef.current?.pause()
      cancelAnimationFrame(animationRef.current as number)
    }
  }

  const whilePlaying = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
  }

  const changeRange = (newValue: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newValue[0]
      setCurrentTime(newValue[0])
    }
  }

  const changeVolume = (newValue: number[]) => {
    const newVolume = newValue[0]
    setVolume(newVolume)
    if (newVolume === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00"

    const minutes = Math.floor(seconds / 60)
    const returnedSeconds = Math.floor(seconds % 60)
    return `${minutes}:${returnedSeconds < 10 ? `0${returnedSeconds}` : returnedSeconds}`
  }

  return (
    <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
      <div className="relative aspect-square">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
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

        <audio ref={audioRef} src={audioUrl} preload="metadata" />

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={togglePlayPause}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <div className="text-xs text-muted-foreground w-16">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 ml-auto" onClick={toggleMute}>
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>

          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={0.01}
            onValueChange={changeRange}
            className="cursor-pointer"
          />

          <div className="flex items-center gap-2">
            <Volume2 className="h-3 w-3 text-muted-foreground" />
            <Slider value={[volume]} max={1} step={0.01} onValueChange={changeVolume} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}
