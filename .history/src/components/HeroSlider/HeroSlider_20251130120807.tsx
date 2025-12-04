'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const slides = [
  {
    id: 1,
    title: 'Slide One',
    subtitle: 'This is the first slide',
    image: '/images/hero1.jpg',
  },
  {
    id: 2,
    title: 'Slide Two',
    subtitle: 'This is the second slide',
    image: '/images/hero2.jpg',
  },
  {
    id: 3,
    title: 'Slide Three',
    subtitle: 'This is the third slide',
    image: '/images/hero3.jpg',
  },
]

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0)
  const slidesRef = useRef<HTMLDivElement[]>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // GSAP animation
  const animateSlides = (currentIndex: number) => {
    slidesRef.current.forEach((slide, index) => {
      if (!slide) return
      if (index === currentIndex) {
        gsap.fromTo(
          slide,
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
        )
      } else {
        gsap.to(slide, { opacity: 0, scale: 1.2, duration: 1, ease: 'power3.in' })
      }
    })
  }

  useEffect(() => {
    animateSlides(current)
  }, [current])

  // Auto-slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000) // 5 seconds per slide

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => (slidesRef.current[index] = el!)}
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            {slide.title}
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4 drop-shadow-md">{slide.subtitle}</p>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ›
      </button>
    </div>
  )
}
