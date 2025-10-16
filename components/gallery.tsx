"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample gallery images - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: "/modern-architecture-building.png",
    alt: "Modern Architecture",
    title: "Modern Architecture",
  },
  {
    id: 2,
    src: "/colorful-abstract-art.png",
    alt: "Abstract Art",
    title: "Abstract Art",
  },
  {
    id: 3,
    src: "/mountain-landscape.png",
    alt: "Mountain Landscape",
    title: "Mountain Landscape",
  },
  {
    id: 4,
    src: "/urban-city-skyline-night.jpg",
    alt: "City Skyline",
    title: "City Skyline",
  },
  {
    id: 5,
    src: "/minimalist-interior.png",
    alt: "Interior Design",
    title: "Interior Design",
  },
  {
    id: 6,
    src: "/technology-digital-innovation.jpg",
    alt: "Digital Innovation",
    title: "Digital Innovation",
  },
  {
    id: 7,
    src: "/ocean-waves-beach-sunset.jpg",
    alt: "Ocean Sunset",
    title: "Ocean Sunset",
  },
  {
    id: 8,
    src: "/forest-trees-nature-green.jpg",
    alt: "Forest Path",
    title: "Forest Path",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {galleryImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-medium text-foreground">{image.title}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-secondary/80 hover:bg-secondary"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>

          <div
            className="relative max-h-[90vh] max-w-[90vw] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full max-w-5xl">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-foreground">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
