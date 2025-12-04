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
import LogoLoop from '@/components/LogoLoop'
export default async function HomePage() {
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
  const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  ]
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
