import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import { CollectionServices } from '@/components/CollectionServices'

import { Solutions } from '@/components/Solutions'
export default async function HomePage() {
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <CollectionServices />
      <Solutions />
    </>
  )
}
