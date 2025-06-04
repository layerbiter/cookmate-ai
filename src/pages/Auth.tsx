import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/auth'

export function Auth() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const setAuth = useAuthStore(state => state.setAuth)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:3001/api/v1/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email }),
      })

      const data = await response.json()
      setAuth(email, data.user.token.access, data.user.token.refresh)
      navigate('/onboarding')
    } catch (error) {
      console.error('Auth error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-neon w-96 animate-glow">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neon-blue animate-glow 
                        flex items-center justify-center">
            <span className="text-4xl">🤖</span>
          </div>
          <h1 className="text-2xl font-bold mb-2 text-white">
            Hello, I'm your Cookmate AI Helper
          </h1>
          <p className="text-neon-blue">I'll guide you to delicious meals!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neon-blue mb-1">
              Enter your email to get started
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
            disabled={isLoading}
            className="w-full bg-neon-purple text-white rounded-lg py-2 px-4 
                     hover:bg-neon-pink transition-colors duration-300
                     focus:outline-none focus:ring-2 focus:ring-neon-blue
                     disabled:opacity-50"
          >
            {isLoading ? 'Processing...' : 'Register / Login'}
          </button>

          <p className="text-sm text-gray-400 text-center mt-4">
            Your email unlocks recipe magic—no password needed!
          </p>
        </form>
      </div>
    </div>
  )
}