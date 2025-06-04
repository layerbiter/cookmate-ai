import { FormEvent, useState } from 'react'

interface OnboardingProps {
  onSubmit: (preferences: {
    diet: string
    cuisines: string[]
    goals: string[]
  }) => void
}

export function Onboarding({ onSubmit }: OnboardingProps) {
  const [diet, setDiet] = useState('')
  const [cuisines, setCuisines] = useState({
    Italian: false,
    Japanese: false,
    Mexican: false
  })
  const [goals, setGoals] = useState({
    weight_loss: false,
    energy_boost: false,
    meal_prep: false
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    const selectedCuisines = Object.entries(cuisines)
      .filter(([_, selected]) => selected)
      .map(([name]) => name)
    
    const selectedGoals = Object.entries(goals)
      .filter(([_, selected]) => selected)
      .map(([name]) => name)

    if (diet && selectedCuisines.length > 0 && selectedGoals.length > 0) {
      onSubmit({
        diet,
        cuisines: selectedCuisines,
        goals: selectedGoals
      })
    }
  }

  return (
    <div className="panel">
      <h2>Tell us about yourself</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="diet">Diet</label>
          <select
            id="diet"
            className="select-field"
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            required
          >
            <option value="">Select your diet</option>
            <option value="keto">Keto</option>
            <option value="vegan">Vegan</option>
            <option value="omnivore">Omnivore</option>
          </select>
        </div>

        <div className="checkbox-group">
          <label className="label">Cuisines</label>
          {Object.keys(cuisines).map(cuisine => (
            <label key={cuisine} className="checkbox-label">
              <input
                type="checkbox"
                checked={cuisines[cuisine as keyof typeof cuisines]}
                onChange={() => setCuisines(prev => ({
                  ...prev,
                  [cuisine]: !prev[cuisine as keyof typeof cuisines]
                }))}
              />
              {cuisine}
            </label>
          ))}
        </div>

        <div className="checkbox-group">
          <label className="label">Goals</label>
          {Object.keys(goals).map(goal => (
            <label key={goal} className="checkbox-label">
              <input
                type="checkbox"
                checked={goals[goal as keyof typeof goals]}
                onChange={() => setGoals(prev => ({
                  ...prev,
                  [goal]: !prev[goal as keyof typeof goals]
                }))}
              />
              {goal.replace('_', ' ')}
            </label>
          ))}
        </div>

        <button type="submit" className="button">
          Save Preferences
        </button>
      </form>
    </div>
  )
}