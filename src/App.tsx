import { useState } from 'react'
import { EmailForm } from './components/EmailForm'
import { OnboardingForm } from './components/OnboardingForm'
import { Dashboard } from './components/Dashboard'

function App() {
  const [currentScreen, setCurrentScreen] = useState<'email' | 'onboarding' | 'dashboard'>('email')
  const [userData, setUserData] = useState({
    email: '',
    preferences: {
      diet: '',
      cuisines: [] as string[],
      goals: [] as string[]
    }
  })

  const handleEmailSubmit = (email: string) => {
    setUserData(prev => ({ ...prev, email }))
    setCurrentScreen('onboarding')
  }

  const handleOnboardingSubmit = (preferences: {
    diet: string
    cuisines: string[]
    goals: string[]
  }) => {
    setUserData(prev => ({ ...prev, preferences }))
    setCurrentScreen('dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {currentScreen === 'email' && (
        <EmailForm onComplete={handleEmailSubmit} />
      )}
      {currentScreen === 'onboarding' && (
        <OnboardingForm onComplete={handleOnboardingSubmit} />
      )}
      {currentScreen === 'dashboard' && (
        <Dashboard userData={userData} />
      )}
    </div>
  )
}

export default App