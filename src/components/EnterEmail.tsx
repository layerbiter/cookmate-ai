import { FormEvent, useState } from 'react'

interface EnterEmailProps {
  onSubmit: (email: string) => void
}

export function EnterEmail({ onSubmit }: EnterEmailProps) {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setIsValid(value.includes('@'))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (isValid) {
      onSubmit(email.trim())
    }
  }

  return (
    <div className="panel">
      <h1>Welcome to Cookmate AI</h1>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="email">
          Enter your email to get started
        </label>
        <input
          id="email"
          type="email"
          className="input-field"
          placeholder="you@example.com"
          value={email}
          onChange={handleChange}
          required
        />
        <button 
          type="submit" 
          className="button"
          disabled={!isValid}
        >
          Continue
        </button>
      </form>
    </div>
  )
}