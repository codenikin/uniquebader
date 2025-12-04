import { HeaderClient } from './componentclient'
import React from 'react'
import type { Media } from '@/payload-types'

export async function Header() {
  const payload = await getPayload()
  return <HeaderClient />
}
