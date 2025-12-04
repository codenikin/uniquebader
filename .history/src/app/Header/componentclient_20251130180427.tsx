'use client'

import { Header } from '@/payload-types'

interface HeaderClientProps {
  headerdata: Header
}
export const HeaderClient: React.FC<HeaderClientProps> = ({ headerdata }) => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300">
      <div className="w-full bg-linear-to-r from-yellow-400 via-blue-500 to-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-4">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a href="/" className="flex items-center -ml-4 sm:-ml-6 lg:-ml-8">
            <img src="/LOGOBADER-1.png" alt="Company Logo" className="h-6 w-auto sm:h-10" />
          </a>
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="relative group">
              <button className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                <span>Products</span>
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className="absolute left-0 mt-2 w-[900px] bg-white dark:bg-gray-900 shadow-xl rounded-lg opacity-0 invisible 
            group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 grid grid-cols-3 gap-8"
              >
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Solutions by Industry
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/transportation"
                        className="text-sm  text-white hover:text-blue-600 flex items-center"
                      >
                        Transportation
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/nav.jpg"
                      alt="Featured Solution"
                      className="w-full h-48 object-cover"
                    />
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Solution
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
