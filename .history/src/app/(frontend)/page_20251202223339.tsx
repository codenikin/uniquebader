import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import { CollectionServices } from '@/components/CollectionServices'

import { Solutions } from '@/components/Solutions'
import { AboutServices } from '@/components/AboutSections'
import { HeroSlider } from '@/components/HeroSlider/HeroSlider'
import SlidingTextBackground from '@/components/slidetext'
import LogoLoop from '@/components/LogoLoop'
export default async function HomePage() {
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <HeroSlider />
      <SlidingTextBackground />
      <Solutions />
      <CollectionServices />
      <AboutServices />
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={96}
        gap={80}
        className=" "
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#0000"
        ariaLabel="Technology partners"
      />
    </>
  )
}
