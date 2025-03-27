"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { products, heroImages } from "@/lib/data"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Create an array of slides combining hero images and product images
  const slides = [
    ...heroImages,
    ...products.map((product) => ({
      image: product.image,
      alt: product.name,
      title: product.name,
      description: product.description,
    })),
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-1" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              fill
              quality={90}
              className="object-cover brightness-50"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl space-y-5 text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{slides[currentSlide].title}</h1>
          <p className="text-lg md:text-xl">{slides[currentSlide].description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#products">
              <Button size="lg" className="font-medium">
                Our Products
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 backdrop-blur-sm border-white text-white hover:bg-background/30"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/20 hover:bg-background/40 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Previous</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/20 hover:bg-background/40 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

