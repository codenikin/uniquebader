'use client'

export const HeaderClient: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300">
      <div className="w-full bg-linear-to-r from-yellow-400 via-blue-500 to-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-4"></div>
      </div>
    </header>
  )
}
