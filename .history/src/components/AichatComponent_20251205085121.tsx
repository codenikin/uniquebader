'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { FiMessageCircle, FaRegArrowAltCircleDown } from 'react-icons/fi'
export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false)
  const [showChatIcon, setShowChatIcon] = useState<boolean>(true)
  const chatIconRef = useRef<HTMLButtonElement>(null)
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (
    <AnimatePresence>
      {showChatIcon && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <button
            ref={chatIconRef}
            onClick={toggleChat}
            className="w-16 h-16 bg-linear-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            {!isChatOpen ? <FiMessageCircle className="size-12" /> : <FaRegArrowAltCircleDown />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
