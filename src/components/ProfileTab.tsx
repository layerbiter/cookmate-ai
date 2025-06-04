interface ProfileTabProps {
  userData: {
    email: string
    preferences: {
      diet: string
      cuisines: string[]
      goals: string[]
    }
  }
}

export function ProfileTab({ userData }: ProfileTabProps) {
  return (
    <div className="space-y-4">
      <div className="profile-badge">
        <img
          src="https://via.placeholder.com/48/FF00FF/FFFFFF?text=AI"
          alt="Profile"
        />
        <span className="text-neon-cyan text-lg">
          {userData.email}
        </span>
      </div>

      <div className="panel">
        <h2>Your Preferences</h2>
        <div className="space-y-2">
          <p>
            <span className="text-neon-yellow">Diet:</span>{' '}
            <span className="text-neon-cyan">{userData.preferences.diet}</span>
          </p>
          <p>
            <span className="text-neon-yellow">Cuisines:</span>{' '}
            <span className="text-neon-cyan">
              {userData.preferences.cuisines.join(', ')}
            </span>
          </p>
          <p>
            <span className="text-neon-yellow">Goals:</span>{' '}
            <span className="text-neon-cyan">
              {userData.preferences.goals.join(', ')}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}