import Link from 'next/link'

interface Props {
  label: string
  url: string
}

const SingleLink = ({ label, url }: Props) => {
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
      <Link
        className="mr-6 px-3 py-2 text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap"
        href={url}
      ></Link>
    </div>
  )
}
