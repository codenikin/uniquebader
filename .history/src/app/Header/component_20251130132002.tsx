'use client'

export const HeaderClient: React.FC = () => {
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
            <img src="/LOGOBADER-1.png" alt="Company Logo" className="h-8 w-auto sm:h-10" />
          </a>
        </div>
      </div>
    </header>
  )
}
