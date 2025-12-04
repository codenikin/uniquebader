import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import config from '@/payload.config'
import { CollectionServices } from '@/components/CollectionServices'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { Solutions } from '@/components/Solutions'
import { AboutServices } from '@/components/AboutSections'
import { HeroSlider } from '@/components/HeroSlider/HeroSlider'
import SlidingTextBackground from '@/components/slidetext'
import LogoLoop from '@/components/LogoLoop/LogoLoop'
import { FaqSection } from '@/components/FaqSection'
export default async function HomePage() {
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
  const techLogos = [
    { node: '/logos/images.jpg', title: 'React', href: 'https://react.dev' },
    { node: '/logos/viss.png', title: 'Next.js', href: 'https://nextjs.org' },
  ]

  return (
    <>
      <HeroSlider />
      <SlidingTextBackground />
      <Solutions />
      <CollectionServices />
      <AboutServices />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-anton text-center text-gray-900 mb-16 animate-fade-in relative">
          OUR VALUABLE CLIENTS
          <span className="block w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mt-4"></span>
        </h2>
      </div>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={96}
        gap={80}
        className="shadow-lg border-2 bg-[#1e73be]"
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#0000"
        ariaLabel="Technology partners"
      />
      <FaqSection />
    </>
  )
}
