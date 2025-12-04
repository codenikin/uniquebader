import { HeaderClient } from './componentclient'
import React from 'react'
import type { Media } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function Header() {
  const payload = await getPayload({ config: configPromise })
  return <HeaderClient />
}
