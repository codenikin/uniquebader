import React from 'react'
// @ts-ignore: allow side-effect CSS import without type declarations
import './styles.css'
import { Anton } from 'next/font/google'
import { Providers } from '@/providers'
import { Header } from '../Header/component'
import Footer from '@/globals/Footer/Footer'

// const primary_font = Outfit({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   style: ['normal'],
//   subsets: ['latin'],
//   variable: '--font-primary',
//   display: 'swap',
//   adjustFontFallback: false,
// })

const anton = Anton({
  weight: '400', // Anton only comes in weight 400
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
})
export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html className={`${anton.variable}`} lang="en">
      <body>
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Providers>{children}</Providers>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
