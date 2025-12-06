import { Certificate } from '@/components/Certificate'
import Certificates from '@/components/CertificateZoom'
import FeatureSection from '@/components/FeatureSection'
export const dynamic = 'force-dynamic'
export default async function AwardPage() {
  return (
    <>
      <FeatureSection />
      <Certificate />
    </>
  )
}
