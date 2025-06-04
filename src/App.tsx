import { useState } from 'react'
import { EnterEmail } from './components/EnterEmail'
import { Onboarding } from './components/Onboarding'
import { SelectProducts } from './components/SelectProducts'
import { GeneratedRecipe } from './components/GeneratedRecipe'
import { Dashboard } from './components/Dashboard'
import './styles.css'

export type Stage = 'email' | 'onboarding' | 'products' | 'recipe' | 'dashboard'

function App() {
  const [stage, setStage] = useState<Stage>('email')
  const [userData, setUserData] = useState({
    email: '',
    preferences: {
      diet: '',
      cuisines: [] as string[],
      goals: [] as string[]
    },
    selectedProducts: [] as string[]
  })

  const handleEmailSubmit = (email: string) => {
    setUserData(prev => ({ ...prev, email }))
    setStage('onboarding')
  }

  const handleOnboardingSubmit = (preferences: {
    diet: string
    cuisines: string[]
    goals: string[]
  }) => {
    setUserData(prev => ({ ...prev, preferences }))
    setStage('products')
  }

  const handleProductsSubmit = (products: string[]) => {
    setUserData(prev => ({ ...prev, selectedProducts: products }))
    setStage('recipe')
  }

  const handleRecipeComplete = () => {
    setStage('dashboard')
  }

  return (
    <div className="app-container">
      {stage === 'email' && (
        <EnterEmail onSubmit={handleEmailSubmit} />
      )}
      {stage === 'onboarding' && (
        <Onboarding onSubmit={handleOnboardingSubmit} />
      )}
      {stage === 'products' && (
        <SelectProducts onSubmit={handleProductsSubmit} />
      )}
      {stage === 'recipe' && (
        <GeneratedRecipe 
          userData={userData}
          onComplete={handleRecipeComplete}
        />
      )}
      {stage === 'dashboard' && (
        <Dashboard userData={userData} />
      )}
    </div>
  )
}

export default App