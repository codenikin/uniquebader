import ContactForm from '@/components/ContactSection'
import Gallery from '@/components/GallerySections'
import TeamInner from '@/components/TeamInner/TeamInner'
export const dynamic = 'force-dynamic'
export default async function ContactPage() {
  return (
    <>
      <TeamInner />
      <ContactForm />
      <Gallery />
    </>
  )
}
