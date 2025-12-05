'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import { useChat } from 'ai/react'
import { FiMessageCircle, FiLoader, FiArrowDownCircle, FiX } from 'react-icons/fi'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false)
  const [showChatIcon, setShowChatIcon] = useState<boolean>(true)
  const chatIconRef = useRef<HTMLButtonElement>(null)
  const { messages, input, handleInputChange, handleSubmit, isLoading, reload, error, stop } =
    useChat({ api: '../api/gemini' })
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
    <div className="flex flex-col min-h-screen">
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
              className="rounded-full size-14 shadow-lg"
            >
              {!isChatOpen ? <FiMessageCircle className="size-12" /> : <FiArrowDownCircle />}
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
            className="fixed bottom-20 right-4 z-50 md:w-[500px] w-[90vw]"
          >
            <Card className="border-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-lg font-medium">Chat</CardTitle>
                <button onClick={toggleChat} className="px-2 py-2">
                  <FiX className="size-4" />
                  <span className="sr-only">Close chat</span>
                </button>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] pr-4">
                  {messages?.length === 0 && (
                    <div className="w-full mt-32 text-gray-500 items-center justify-center flex gap-3">
                      No messages yet
                    </div>
                  )}
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                    >
                      <ReactMarkdown
                        // remarkPlugins={[remarkGfm]}
                        // rehypePlugins={[rehypeHighlight]}
                        components={{
                          code: ({ inline, children, className }: CodeProps) =>
                            inline ? (
                              <code className="bg-gray-200 px-1 rounded text-sm font-mono">
                                {children}
                              </code>
                            ) : (
                              <pre className="bg-gray-200 rounded p-2 overflow-x-auto text-sm font-mono">
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
                            return hasBlock ? <div>{children}</div> : <p>{children}</p>
                          },

                          ul: ({ children }: ListProps) => (
                            <ul className="list-disc ml-4 my-2">{children}</ul>
                          ),
                          ol: ({ children }: ListProps) => (
                            <ol className="list-decimal ml-4 my-2">{children}</ol>
                          ),
                          li: ({ children }: ListProps) => <li className="ml-2">{children}</li>,
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="w-full items-center flex justify-center gap-x-3">
                      <FiLoader className="animate-spin h-5 w-5 text-primary" />
                      <button className="underline" type="button" onClick={() => stop()}>
                        Abort
                      </button>
                    </div>
                  )}
                  {error && (
                    <div className="w-full text-red-500 items-center justify-center flex gap-3">
                      <div>An error occurred</div>
                      <button className="underline" type="button" onClick={() => reload()}>
                        Retry
                      </button>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                  <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border rounded"
                  />
                  <button type="submit" disabled={isLoading} />
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
