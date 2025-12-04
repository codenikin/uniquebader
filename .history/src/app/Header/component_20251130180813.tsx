import { HeaderClient } from './componentclient'
import React from 'react'
import type { Media } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function Header() {
  const payload = await getPayload({ config: configPromise })
  const header1 = await payload.findGlobal({ slug: 'header' })
  console.log('headerdata', header1)
  return <HeaderClient headerdata={header1} />
}
