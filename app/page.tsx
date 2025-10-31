"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Menu, X, Music, Award, Mic } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SpotifyPlayer from "@/components/spotify-player"
import ContactForm from "@/components/contact-form"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">DAMEDRA</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#music" className="text-sm font-medium transition-colors hover:text-primary">
              Music
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">Work With Me</Link>
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 px-6 bg-background shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#music"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Music
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild size="sm" className="w-full mt-2">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Work With Me
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/damedra-singing.jpg"
              alt="Damedra singing with a microphone"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-36 lg:py-48 text-white">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                Afrofusion / Afro-jazz / Soul
              </Badge>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-balance">Damedra</h1>
              <p className="text-2xl text-gray-200 font-medium">The Pharm-Artiste</p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Where healing meets rhythm. Blending soulful melodies with rich African rhythms to create music that
                speaks to emotion, resilience, and feminine strength.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg">
                  <Link href="#music">Listen Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/damedra-with-instruments.jpg"
                  alt="Damedra with keyboard and guitar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">About Damedra</h2>
                  <p className="text-muted-foreground">Doctor of Pharmacy & Afrofusion Artist</p>
                </div>

                <p className="text-lg leading-relaxed">
                  Damedra is a Doctor of Pharmacy and Afrofusion artist whose music bridges the world of healing and
                  human connection. Blending soulful melodies with rich African rhythms, she creates songs that speak to
                  emotion, resilience, and feminine strength.
                </p>

                <p className="leading-relaxed">
                  Known as the <span className="font-semibold">Pharm-Artiste</span>, Damedra embodies a rare duality — a
                  healer by profession and a storyteller by rhythm. Her artistry flows from lived experience, weaving
                  science, spirituality, and sound into something deeply personal yet universally relatable.
                </p>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Sound & Influence</h3>
                  <p className="leading-relaxed">
                    Her sound fuses Afrobeat, soul, and jazz influences with lyrics that feel intimate yet empowering.
                    Damedra's voice carries both warmth and confidence — the kind that moves listeners to feel, think,
                    and dance. Each song is crafted with precision, emotion, and purpose — a reflection of her
                    scientific discipline and artistic passion.
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://instagram.com/_damedra" target="_blank" aria-label="Instagram">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://tiktok.com/@_damedra" target="_blank" aria-label="TikTok">
                      <Music className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                      <Youtube className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/40">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Achievements & Recognition</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Top 10 Female Artiste</h3>
                <p className="text-muted-foreground text-sm">Recognized during International Women's Day 2023</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">5,000+ Plays</h3>
                <p className="text-muted-foreground text-sm">On select singles and viral performance clips</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">The Pharm-Artiste</h3>
                <p className="text-muted-foreground text-sm">Curator of the term representing music and medicine</p>
              </div>
            </div>
          </div>
        </section>

        <section id="music" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Music</h2>
              <p className="text-muted-foreground text-lg">
                Music is medicine. Each note is crafted to connect, empower, and heal.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <SpotifyPlayer
                title="2nite"
                description="A spiritual yet sensual journey merging poetic lyricism with infectious rhythm"
                spotifyTrackId="3r4c2w160gnTV86XUpXR3z"
                tags={["Afrofusion", "Soul", "Empowering"]}
              />
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">More music coming soon. Follow on social media for updates.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/40">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vision & Mission</h2>
              <p className="text-xl leading-relaxed">
                For Damedra, <span className="font-semibold">music is medicine</span>. Her mission is to use sound to
                connect, empower, and heal — especially women.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With every note, she reminds her audience that vulnerability and strength coexist, and that art can
                serve as both expression and therapy.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Let's Connect</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Interested in collaborations, bookings, or just want to say hello? I'd love to hear from you. Let's
                  create something meaningful together.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span>contact@damedra.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <span>@_damedra</span>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 bg-muted/40">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold">DAMEDRA</span>
              </Link>
              <p className="text-sm text-muted-foreground mt-2">Music is medicine.</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-4 mb-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://instagram.com/_damedra" target="_blank" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://tiktok.com/@_damedra" target="_blank" aria-label="TikTok">
                    <Music className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Damedra. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
