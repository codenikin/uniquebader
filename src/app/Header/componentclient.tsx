'use client'
import React from 'react'
import { Header } from '@/payload-types'
import MegaLink from './components/Megalink'
import SingleLink from './components/Singlelink'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiX,
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi'
interface HeaderClientProps {
  headerdata: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ headerdata }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white  shadow-lg transition-transform duration-300">
      <div className="w-full bg-[#1e73be] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row sm:flex-row justify-between items-center space-x-4">
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
            +971 50 6864630
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a href="/" className="flex items-center -ml-4 sm:-ml-6 lg:-ml-8">
            <img src="/LOGOBADER-1.png" alt="Company Logo" className="h-12 ml-2 w-auto sm:h-16" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="lg:hidden p-3 rounded-full text-gray-600 hover:text-gray-900 transition-all duration-200 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
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

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: isOpen ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">BaderTech</h2>
              <button onClick={() => setIsOpen(false)}>
                <FiX size={24} className="text-gray-700" />
              </button>
            </div>

            <nav className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
              {headerdata.navItems?.map((item) => (
                <a
                  key={item.id}
                  href={item.link?.url ?? '#'}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 font-medium text-base hover:text-[#1e73be] hover:pl-2 transition-all duration-200 py-2 border-l-4 border-transparent hover:border-[#1e73be]"
                >
                  {item.link.label}
                </a>
              ))}
            </nav>
            <div className="h-px bg-gray-200 mx-6"></div>
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
              <div className="flex items-start space-x-3 group">
                <FiPhone className="w-5 h-5 text-[#1e73be] mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                  <a
                    href="tel:+971509893134"
                    className="text-gray-700 font-medium hover:text-[#1e73be] transition-colors"
                  >
                    +971 50 6864630
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiMail className="w-5 h-5 text-[#1e73be] mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                  <a
                    href="mailto:info@bader.ae"
                    className="text-gray-700 font-medium hover:text-[#1e73be] transition-colors text-sm break-all"
                  >
                    info@bader.ae
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-[#1e73be] mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Address</p>
                  <p className="text-gray-700 font-medium text-sm">Dubai, UAE</p>
                </div>
              </div>
              <div className="h-px bg-gray-200 mx-6"></div>
              <div className="p-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                  Follow Us
                </h3>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-[#1e73be] hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FiFacebook size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-[#1e73be] hover:text-white transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <FiTwitter size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-[#1e73be] hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={18} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-[#1e73be] hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FiInstagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
