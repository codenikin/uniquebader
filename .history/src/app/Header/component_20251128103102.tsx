'use client'

interface HeaderClientProps {
  logo: Media
  favicon: Media
}
export const HeaderClient: React.FC<HeaderClientProps> = ({ logo }) => {
  return <header className="bg-white shadow-lg sticky top-0 z-50"></header>
}
