import React from 'react'
// @ts-ignore: allow side-effect CSS import without type declarations
import './styles.css'
import { Anton } from 'next/font/google'
import { Providers } from '@/providers'
import { Header } from '../Header/component'
import Footer from '@/globals/Footer/Footer'
import AichatComponent from '@/components/AichatComponent'
export const dynamic = 'force-dynamic'
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
      <meta name="robots" content="noindex, nofollow" />
      <body>
        <AichatComponent />
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
