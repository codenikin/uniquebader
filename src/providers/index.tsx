import React from 'react'
import { ThemeLayoutAnimation } from './ThemeLayoutAnimation'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <ThemeLayoutAnimation>{children}</ThemeLayoutAnimation>
}
