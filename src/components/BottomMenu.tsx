interface BottomMenuProps {
  activeTab: 'profile' | 'calories' | 'fridge'
  onTabChange: (tab: 'profile' | 'calories' | 'fridge') => void
}

export function BottomMenu({ activeTab, onTabChange }: BottomMenuProps) {
  return (
    <div className="bottom-menu">
      <button
        className={`menu-button ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => onTabChange('profile')}
      >
        Profile
      </button>
      <button
        className={`menu-button ${activeTab === 'calories' ? 'active' : ''}`}
        onClick={() => onTabChange('calories')}
      >
        Calories
      </button>
      <button
        className={`menu-button ${activeTab === 'fridge' ? 'active' : ''}`}
        onClick={() => onTabChange('fridge')}
      >
        Fridge
      </button>
    </div>
  )
}