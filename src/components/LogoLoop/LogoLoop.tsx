'use client'
import React, { useState } from 'react'

export interface Logo {
  node: string
  href: string
  title: string
}

export interface LogoLoopProps {
  logos: Logo[]
  speed?: number
  direction?: 'left' | 'right'
  logoHeight?: number
  gap?: number
  className?: string
  pauseOnHover?: boolean
  scaleOnHover?: boolean
  fadeOut?: boolean
  fadeOutColor?: string
  ariaLabel?: string
}

export default function LogoLoop({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 80,
  gap = 60,
  className = '',
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo loop',
}: LogoLoopProps) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className={`relative w-full overflow-hidden bg-white py-8 ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      aria-label={ariaLabel}
    >
      <div
        className="flex gap-[${gap}px] animate-loop"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            title={logo.title}
            className={`flex items-center justify-center flex-shrink-0 ${
              scaleOnHover ? 'hover:scale-110 transition-transform' : ''
            }`}
            style={{ height: `${logoHeight}px` }}
          >
            <img src={logo.node} alt={logo.title} className="h-full w-auto object-contain" />
          </a>
        ))}
      </div>

      {fadeOut && (
        <div
          className="absolute inset-y-0 right-0 w-1/4 pointer-events-none"
          style={{
            background: `linear-gradient(to right, transparent, ${fadeOutColor})`,
          }}
        />
      )}
    </div>
  )
}
