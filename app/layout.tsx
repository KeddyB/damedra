import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Damedra | Music for Brands",
  description: "Damedra creates authentic music that resonates with audiences and amplifies brand messages.",
  keywords: ["music", "brand", "singer", "songwriter", "licensing", "composition", "Damedra"],
  authors: [{ name: "Damedra" }],
  creator: "Damedra",
  publisher: "Damedra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://damedra.com",
    title: "Damedra | Music for Brands",
    description: "Elevate your brand with authentic sound by Damedra",
    siteName: "Damedra",
    images: [
      {
        url: "/images/damedra-with-instruments.jpg",
        width: 1200,
        height: 630,
        alt: "Damedra with musical instruments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Damedra | Music for Brands",
    description: "Elevate your brand with authentic sound by Damedra",
    images: ["/images/damedra-with-instruments.jpg"],
    creator: "@damedra",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
