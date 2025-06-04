import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserPreferences {
  diet: string
  cuisines: string[]
  goals: string[]
}

interface UserState {
  email: string | null
  preferences: UserPreferences | null
  setEmail: (email: string) => void
  setPreferences: (preferences: UserPreferences) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      email: null,
      preferences: null,
      setEmail: (email) => set({ email }),
      setPreferences: (preferences) => set({ preferences }),
    }),
    {
      name: 'user-storage',
    }
  )
)