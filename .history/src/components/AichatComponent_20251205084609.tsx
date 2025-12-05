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
          <Button
            ref={chatIconRef}
            onClick={toggleChat}
            size="icon"
            className="rounded-full size-14 shadow-lg"
          >
            {!isChatOpen ? <FiMessageCircle className="size-12" /> : <FaRegArrowAltCircleDown />}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
