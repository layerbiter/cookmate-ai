import { FormEvent, useState } from 'react'
import { useUserStore } from '../stores/userStore'

interface OnboardingFormProps {
  onComplete: () => void
}

export function OnboardingForm({ onComplete }: OnboardingFormProps) {
  const [diet, setDiet] = useState('')
  const [cuisines, setCuisines] = useState<string[]>([])
  const [goals, setGoals] = useState<string[]>([])
  const setPreferences = useUserStore(state => state.setPreferences)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setPreferences({ diet, cuisines, goals })
    onComplete()
  }

  const handleCuisineToggle = (cuisine: string) => {
    setCuisines(prev => 
      prev.includes(cuisine) 
        ? prev.filter(c => c !== cuisine)
        : [...prev, cuisine]
    )
  }

  const handleGoalToggle = (goal: string) => {
    setGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-neon w-96">
        <h1 className="text-2xl font-bold mb-6 text-white">Personalize Your Experience</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neon-blue mb-2">
              Select your diet
            </label>
            <select
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-neon-blue 
                       text-white focus:outline-none focus:ring-2 focus:ring-neon-purple"
              required
            >
              <option value="">Choose a diet...</option>
              <option value="keto">Keto</option>
              <option value="vegan">Vegan</option>
              <option value="omnivore">Omnivore</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neon-blue mb-2">
              Preferred cuisines
            </label>
            <div className="space-y-2">
              {['Italian', 'Japanese', 'Mexican'].map((cuisine) => (
                <label key={cuisine} className="flex items-center text-white">
                  <input
                    type="checkbox"
                    checked={cuisines.includes(cuisine)}
                    onChange={() => handleCuisineToggle(cuisine)}
                    className="rounded border-neon-blue text-neon-purple"
                  />
                  <span className="ml-2">{cuisine}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neon-blue mb-2">
              Your goals
            </label>
            <div className="space-y-2">
              {['weight_loss', 'energy_boost', 'meal_prep'].map((goal) => (
                <label key={goal} className="flex items-center text-white">
                  <input
                    type="checkbox"
                    checked={goals.includes(goal)}
                    onChange={() => handleGoalToggle(goal)}
                    className="rounded border-neon-blue text-neon-purple"
                  />
                  <span className="ml-2">{goal.replace('_', ' ')}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-neon-purple text-white rounded-lg py-2 px-4 
                     hover:bg-neon-pink transition-colors duration-300
                     focus:outline-none focus:ring-2 focus:ring-neon-blue"
          >
            Complete Setup
          </button>
        </form>
      </div>
    </div>
  )
}