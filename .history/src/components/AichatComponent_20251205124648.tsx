'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import { useChat } from 'ai/react'
import { FiMessageCircle, FiLoader, FiArrowDownCircle, FiX, FiSend } from 'react-icons/fi'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from './ui/scroll-area'

export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false)
  const [showChatIcon, setShowChatIcon] = useState<boolean>(true)
  const chatIconRef = useRef<HTMLButtonElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { messages, input, handleInputChange, handleSubmit, isLoading, reload, error, stop } =
    useChat({ api: '/api/gemini' })

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowChatIcon(true)
      } else {
        setShowChatIcon(false)
        setIsChatOpen(false)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  type CodeProps = {
    inline?: boolean
    children?: ReactNode
    className?: string
  }
  type ParagraphProps = {
    children?: ReactNode
  }
  type ListProps = {
    children?: ReactNode
  }

  return (
    <div className="flex flex-col">
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
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all"
            >
              {!isChatOpen ? (
                <FiMessageCircle className="size-6" />
              ) : (
                <FiArrowDownCircle className="size-6" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ height: 'calc(100vh - 100px)' }}
            className="fixed bottom-20 right-4 z-50 md:w-[500px] w-[90vw] flex flex-col"
          >
            <Card className="border border-gray-300 h-full flex flex-col shadow-xl rounded-lg bg-white overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border border-gray-300">
                <div className="flex items-center gap-3">
                  <img src="/chatbot.png" alt="Chat Assistant" className="w-6 h-6" />
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    Chat Assistant
                  </CardTitle>
                </div>
                <button
                  onClick={toggleChat}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <FiX className="size-5" />
                  <span className="sr-only">Close chat</span>
                </button>
              </CardHeader>
              <CardContent className="flex-1 overflow-hidden p-0">
                <ScrollArea className="h-full w-full pr-3 py-4">
                  {messages?.length === 0 && (
                    <div className="w-full h-full text-gray-400 text-sm items-center justify-center flex flex-col gap-3">
                      <FiMessageCircle className="size-8" />
                      <p>No messages yet. Start a conversation!</p>
                    </div>
                  )}
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-gray-200 text-gray-800 rounded-bl-none'
                        }`}
                      >
                        <ReactMarkdown
                          components={{
                            code: ({ inline, children, className }: CodeProps) =>
                              inline ? (
                                <code
                                  className={`${message.role === 'user' ? 'bg-blue-500' : 'bg-gray-300'} px-1 rounded text-xs font-mono`}
                                >
                                  {children}
                                </code>
                              ) : (
                                <pre
                                  className={`${message.role === 'user' ? 'bg-blue-500' : 'bg-gray-300'} rounded p-2 overflow-x-auto text-xs font-mono my-2`}
                                >
                                  <code className={className}>{children}</code>
                                </pre>
                              ),
                            p: ({ children }: ParagraphProps) => {
                              const hasBlock =
                                Array.isArray(children) &&
                                children.some(
                                  (child: any) =>
                                    child?.type === 'pre' ||
                                    child?.type === 'ul' ||
                                    child?.type === 'ol',
                                )
                              return hasBlock ? (
                                <div>{children}</div>
                              ) : (
                                <p className="text-sm">{children}</p>
                              )
                            },
                            ul: ({ children }: ListProps) => (
                              <ul className="list-disc ml-4 my-2 text-sm">{children}</ul>
                            ),
                            ol: ({ children }: ListProps) => (
                              <ol className="list-decimal ml-4 my-2 text-sm">{children}</ol>
                            ),
                            li: ({ children }: ListProps) => <li className="ml-2">{children}</li>,
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="w-full items-center flex justify-center gap-x-3 py-3">
                      <FiLoader className="animate-spin h-5 w-5 text-blue-600" />
                      <button
                        className="underline text-sm text-gray-600 hover:text-gray-800"
                        type="button"
                        onClick={() => stop()}
                      >
                        Abort
                      </button>
                    </div>
                  )}
                  {error && (
                    <div className="w-full text-red-600 items-center justify-center flex gap-3 py-3 bg-red-50 rounded p-3">
                      <div className="text-sm">An error occurred</div>
                      <button
                        className="underline text-sm hover:text-red-800"
                        type="button"
                        onClick={() => reload()}
                      >
                        Retry
                      </button>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </ScrollArea>
              </CardContent>
              <CardFooter className="border border-gray-300 pt-3">
                <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
                  <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
                  >
                    <FiSend className="size-5" />
                  </button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
