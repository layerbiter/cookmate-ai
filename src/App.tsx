import { useState } from 'react'
import { EmailForm } from './components/EmailForm'
import { OnboardingForm } from './components/OnboardingForm'
import { Dashboard } from './components/Dashboard'

function App() {
  const [currentScreen, setCurrentScreen] = useState<'email' | 'onboarding' | 'dashboard'>('email')

  return (
    <div className="min-h-screen bg-gray-900">
      {currentScreen === 'email' && <EmailForm onComplete={() => setCurrentScreen('onboarding')} />}
      {currentScreen === 'onboarding' && <OnboardingForm onComplete={() => setCurrentScreen('dashboard')} />}
      {currentScreen === 'dashboard' && <Dashboard />}
    </div>
  )
}

export default App