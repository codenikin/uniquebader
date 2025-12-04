import React from 'react'
// @ts-ignore: allow side-effect CSS import without type declarations
import './styles.css'
import { Providers } from '@/providers'
import { Header } from '../Header/component'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
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
