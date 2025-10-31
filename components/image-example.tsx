import Image from "next/image"

export default function ImageExample() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Image Example</h2>
      <div className="relative aspect-video max-w-3xl rounded-lg overflow-hidden">
        <Image
          src="/images/byd-auto-show.jpg"
          alt="BYD automotive display at an auto show"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-muted-foreground">
        The image has been successfully added to the public/images folder and can be used throughout the website.
      </p>
    </div>
  )
}
