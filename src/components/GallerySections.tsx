'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  {
    src: 'https://picsum.photos/id/1015/600/400',
    caption: 'Mountain View',
  },
  {
    src: 'https://picsum.photos/id/1025/600/400',
    caption: 'Majestic Eagle',
  },
  {
    src: 'https://picsum.photos/id/1035/600/400',
    caption: 'Calm Lake',
  },
  {
    src: 'https://picsum.photos/id/1045/600/400',
    caption: 'Foggy Forest',
  },
  {
    src: 'https://picsum.photos/id/1055/600/400',
    caption: 'Ocean Horizon',
  },
  {
    src: 'https://picsum.photos/id/1065/600/400',
    caption: 'Desert Dunes',
  },
]

const Gallery = () => {
  const galleryRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const elements = galleryRef.current.filter((el): el is HTMLDivElement => el !== null)
    if (elements.length === 0) return

    gsap.from(elements, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.18,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 90%',
      },
    })
  }, [])

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">GSAP Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              galleryRef.current[index] = el
            }}
            className="group cursor-pointer"
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* CAPTION WITH ANIMATION */}
            <p
              className="text-center mt-3 text-lg font-medium opacity-0 group-hover:opacity-100
                         transition-opacity duration-500 translate-y-2 group-hover:translate-y-0"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
