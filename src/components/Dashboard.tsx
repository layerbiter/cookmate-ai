import { useState } from 'react'
import { ProfileTab } from './ProfileTab'
import { CaloriesTab } from './CaloriesTab'
import { FridgeTab } from './FridgeTab'
import { BottomMenu } from './BottomMenu'

interface DashboardProps {
  userData: {
    email: string
    preferences: {
      diet: string
      cuisines: string[]
      goals: string[]
    }
    selectedProducts: string[]
  }
}

export function Dashboard({ userData }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'calories' | 'fridge'>('profile')

  return (
    <div className="dashboard-container">
      {activeTab === 'profile' && <ProfileTab userData={userData} />}
      {activeTab === 'calories' && <CaloriesTab />}
      {activeTab === 'fridge' && <FridgeTab products={userData.selectedProducts} />}
      <BottomMenu activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}