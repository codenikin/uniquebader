import { HeroSlider } from '@/components/HeroSlider/HeroSlider'
import Process from '@/components/Process/Process'

export const dynamic = 'force-dynamic'
export default async function ServicePage() {
  return (
    <>
      <HeroSlider />
      <Process />
    </>
  )
}
