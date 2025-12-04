'use client'
import { Header } from '@/payload-types'
import MegaLink from './components/Megalink'
import SingleLink from './components/Singlelink'
interface HeaderClientProps {
  headerdata: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ headerdata }) => {
  return (
    <header className="top-0 left-0 right-0 w-full z-50 bg-white  shadow-lg transition-transform duration-300">
      <div className="w-full bg-[#1e73be] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-x-4">
          <a
            href="tel:+971509893134"
            className="flex items-center hover:text-white/80 transition group"
          >
            <div className="bg-white/10 rounded-full p-1.5 mr-2 group-hover:bg-white/20 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            +971 50 989 3134
          </a>
          <button
            id="search-trigger"
            className="p-1 hover:text-gray-200 transition-colors flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-sm">Search</span>
          </button>
        </div>
      </div>
      <div className="fixed max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a href="/" className="flex items-center -ml-4 sm:-ml-6 lg:-ml-8">
            <img src="/LOGOBADER-1.png" alt="Company Logo" className="h-12 ml-2 w-auto sm:h-16" />
          </a>
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {headerdata.navItems?.map((item) => {
              if (item.link.submenu?.length) {
                return (
                  <MegaLink
                    key={item.id}
                    label={item.link.label!}
                    url={item.link.url!}
                    submenus={item.link.submenu}
                  />
                )
              } else {
                return <SingleLink key={item.id} label={item.link.label} url={item.link.url!} />
              }
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
