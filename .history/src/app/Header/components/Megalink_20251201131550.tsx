import Link from 'next/link'
import Image from 'next/image'
interface Props {
  label: string
  url: string

  submenus?: {
    sub_type?: 'custom' | 'reference' | null | undefined
    sub_newTab?: boolean | null | undefined
    sub_url?: string | null | undefined
    label: string
    id?: string | null | undefined
  }[]
}
const Megalink = ({ label, url, submenus }: Props) => {
  return (
    <div className="relative group">
      <button className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
        <span>{label}</span>
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
        className="absolute left-0 right-0 w-[600px] bg-white dark:bg-gray-900 shadow-xl rounded-lg opacity-0 invisible 
            group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-2 overflow-hidden"
      >
        <div className="p-6 bg-gray-50 dark:bg-gray-800">
          {submenus &&
            submenus.map((submenu) => (
              <a
                key={submenu.id}
                href={submenu.sub_url!}
                target={submenu.sub_newTab ? '_blank' : '_self'}
                className="flex items-center gap-3 py-2 group"
              >
                {submenu.label}
                <span className="text-gray-400">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6h-6v6h6v-6zm6 0h-6v6h6v-6zm-6 6h-6v6h6v-6zm6 0h-6v6h6v-6z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-sm"></span>
              </a>
            ))}
        </div>
        <div className="relative">
          <img src="/nav.jpg" alt="Support" className="w-half h-full object-cover" />
          {/* <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-xl font-semibold">Support</h3>
          </div> */}
        </div>
        {/* <div>
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
              {submenus &&
                submenus.map((submenu) => (
                  <a
                    key={submenu.id}
                    href={submenu.sub_url!}
                    target={submenu.sub_newTab ? '_blank' : '_self'}
                    className="text-sm  text-white hover:text-blue-600 flex items-center"
                  >
                    {submenu.label}
                  </a>
                ))}
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
        </div> */}
      </div>
    </div>
  )
}
export default Megalink
