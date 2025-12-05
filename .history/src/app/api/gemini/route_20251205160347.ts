import { streamText, Message } from 'ai'
import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { initialMessages } from '@/lib/data'

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || '',
  baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
})

export const runtime = 'edge'

const generateId = () => Math.random().toString(36).substring(2, 15)

const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
  {
    role: 'user',
    id: generateId(),
    content: initialMessages.content,
  },
  ...messages.map((message) => ({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),
]

export async function POST(request: Request) {
  const { messages } = await request.json()

  const stream = await streamText({
    model: google('models/gemini-2.0-flash-exp'), // ✅ use latest model
    messages: buildGoogleGenAIPrompt(messages),
    temperature: 0.7,
  })

  return stream?.toDataStreamResponse()
}
