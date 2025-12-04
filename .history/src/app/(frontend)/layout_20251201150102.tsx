import React from 'react'
// @ts-ignore: allow side-effect CSS import without type declarations
import './styles.css'
import { Outfit, Anton } from 'next/font/google'
import { Providers } from '@/providers'
import { Header } from '../Header/component'

// const primary_font = Outfit({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   style: ['normal'],
//   subsets: ['latin'],
//   variable: '--font-primary',
//   display: 'swap',
//   adjustFontFallback: false,
// })

const secondary_font = Anton({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
  adjustFontFallback: false,
})
export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html className={`${secondary_font.variable}`} lang="en">
      <body>
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  )
}
