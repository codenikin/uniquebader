import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import { CollectionServices } from '@/components/CollectionServices'

export default async function HomePage() {
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="">
      <CollectionServices />
      <div className="footer h-screen">
        <p>Update this page by editing</p>
        <a className="codeLink" href={fileURL}>
          <code>app/(frontend)/page.tsx</code>
        </a>
      </div>
    </div>
  )
}
