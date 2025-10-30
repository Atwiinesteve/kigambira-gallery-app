"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Sample gallery images - replace with your actual images
const galleryImages = [
  // {
  //   id: 1,
  //   src: "/1.jpg",
  //   alt: "Kigambira Safari Lodge View",
  // },
  {
    id: 2,
    src: "/2.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 3,
    src: "/3.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 4,
    src: "/4.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 5,
    src: "/5.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 6,
    src: "/6.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 7,
    src: "/7.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 8,
    src: "/8.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 9,
    src: "/9.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 10,
    src: "/10.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 11,
    src: "/11.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  // {
  //   id: 12,
  //   src: "/12.jpg",
  //   alt: "Kigambira Safari Lodge View",
  // },
  {
    id: 13,
    src: "/13.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 14,
    src: "/14.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 15,
    src: "/15.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 16,
    src: "/16.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  // {
  //   id: 17,
  //   src: "/17.jpg",
  //   alt: "Kigambira Safari Lodge View",
  // },
  // {
  //   id: 18,
  //   src: "/18.jpg",
  //   alt: "Kigambira Safari Lodge View",
  // },
  {
    id: 19,
    src: "/19.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 20,
    src: "/20.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 21,
    src: "/21.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 22,
    src: "/22.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  // {
  //   id: 23,
  //   src: "/23.jpg",
  //   alt: "Kigambira Safari Lodge View",
  // },
  // {
  //   id: 24,
  //   src: "/24.jpg",
  //   alt: "Kigambira Safari Lodge View",
  // },
  {
    id: 25,
    src: "/25.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 26,
    src: "/26.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 27,
    src: "/27.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 28,
    src: "/28.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  // {
  //   id: 29,
  //   src: "/29.jpg",
  //   alt: "Kigambira Safari Lodge View",
  // },
  // {
  //   id: 30,
  //   src: "/30.jpg",
  //   alt: "Kigambira Safari Lodge View",
  // },
  {
    id: 31,
    src: "/31.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 32,
    src: "/32.jpg",
    alt: "Kigambira Safari Lodge View",
  },  
  {
    id: 33,
    src: "/33.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 34,
    src: "/34.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 35,
    src: "/35.jpg",
    alt: "Kigambira Safari Lodge View",
  },    
  {
    id: 36,
    src: "/36.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 37,
    src: "/37.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 38,
    src: "/38.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 39,
    src: "/39.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 40,
    src: "/40.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 41,
    src: "/41.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 42,
    src: "/42.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id:   43,
    src: "/43.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 44,
    src: "/44.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 45,
    src: "/45.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 46,
    src: "/46.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 47,
    src: "/47.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 48,
    src: "/48.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 49,
    src: "/49.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 50,
    src: "/50.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  // {
  //   id: 51,
  //   src: "/51.jpg",
  //   alt: "Kigambira Safari Lodge View",
  // },
  {
    id: 52,
    src: "/52.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 53,
    src: "/53.jpg",
    alt: "Kigambira Safari Lodge View",
  },  
  {
    id: 54,
    src: "/54.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 55,
    src: "/55.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  // {
  //   id: 56,
  //   src: "/56.jpg",
  //   alt: "Kigambira Safari Lodge View",
  // },    
  {
    id: 57,
    src: "/57.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 58,
    src: "/58.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 59,
    src: "/59.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 60,
    src: "/60.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 61,
    src: "/61.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 62,
    src: "/62.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 63,
    src: "/63.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  // {
  //   id: 64,
  //   src: "/64.jpg",
  //   alt: "Kigambira Safari Lodge View",
  // },
  {
    id: 65,
    src: "/65.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 66,
    src: "/66.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 67,
    src: "/67.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 68,
    src: "/68.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 69,
    src: "/69.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 70,
    src: "/70.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  {
    id: 71,
    src: "/71.jpg",
    alt: "Kigambira Safari Lodge View",
  },
  
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {galleryImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-[4/3] overflow-hidden rounded-none bg-secondary transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover rounded-none transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-medium text-foreground">{image.title}</p>
            </div> */}
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
            className="absolute top-4 right-4 z-10 h-10 w-10 rounded-none bg-secondary/80 hover:bg-secondary"
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
            {/* <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-foreground">{selectedImage.title}</h3>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
