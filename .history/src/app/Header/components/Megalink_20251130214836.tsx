import Link from 'next/link'
import Image from 'next/image'
interface Props {
  label: string
  url: string

  submenus?: {
    sub_type?: 'custom' | null | undefined
    sub_newTab?: boolean | null | undefined
    sub_url?: string | null | undefined
    label: string
    id?: string | null | undefined
  }[]
}
const Megalink = ({ label }: Props) => {
  return (
    <div className="relative group">
      <button className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
        <span>Products</span>
        <svg
          className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className="absolute left-0 mt-2 w-[900px] bg-white dark:bg-gray-900 shadow-xl rounded-lg opacity-0 invisible 
            group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 grid grid-cols-3 gap-8"
      >
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <img src="/nav.jpg" alt="Featured Solution" className="w-full h-48 object-cover" />
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Solution</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Megalink
