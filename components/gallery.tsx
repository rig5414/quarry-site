"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { galleryImages } from "@/lib/data"
import Link from "next/link"

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setOpen(true)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              quality={90}
              className="object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/gallery">
        <Button>View More Projects</Button>
        </Link>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-sm gallery-dialog">
        <DialogTitle className="sr-only">{galleryImages[currentImage].title}</DialogTitle>
          <div className="relative h-[70vh] w-full">
            <Image
              src={galleryImages[currentImage].src || "/placeholder.svg"}
              alt={galleryImages[currentImage].alt}
              fill
              quality={90}
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4">
              <h3 className="text-lg font-medium">{galleryImages[currentImage].title}</h3>
              <p className="text-muted-foreground">{galleryImages[currentImage].description}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background/80"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background/80"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <style jsx global>{`
        .gallery-dialog [data-radix-dialog-close] {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 10;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 9999px;
        }
        
        .gallery-dialog [data-radix-dialog-close]:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </>
  )
}

