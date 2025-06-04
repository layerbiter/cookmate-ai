import { FormEvent, useState } from 'react'
import { useUserStore } from '../stores/userStore'

interface EmailFormProps {
  onComplete: () => void
}

export function EmailForm({ onComplete }: EmailFormProps) {
  const [email, setEmail] = useState('')
  const setUserEmail = useUserStore(state => state.setEmail)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setUserEmail(email)
    onComplete()
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-neon w-96 animate-glow">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2 text-white">
            Welcome to Cookmate AI
          </h1>
          <p className="text-neon-blue">Let's get started with your email</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neon-blue mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-neon-blue 
                       text-white focus:outline-none focus:ring-2 focus:ring-neon-purple"
              placeholder="your@email.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neon-purple text-white rounded-lg py-2 px-4 
                     hover:bg-neon-pink transition-colors duration-300
                     focus:outline-none focus:ring-2 focus:ring-neon-blue"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}