'use client'
import { useEffect, useState, createContext } from 'react'
import { usePathname } from 'next/navigation'
import { ScrollAnimation } from '@/common/scrollAnimation'
import type { ThemeLayoutAnimationContextType } from './types'

const initialContext: ThemeLayoutAnimationContextType = {
  setSettings: () => null,
  settings: undefined,
}

const BasicContext = createContext(initialContext)
export const ThemeLayoutAnimation = ({ children }: { children: React.ReactNode }) => {
  const router = usePathname()
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollAnimation()
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    ScrollAnimation()
  }, [router])

  return (
    <>
      <BasicContext value={{ setSettings, settings }}>{children}</BasicContext>
    </>
  )
}
