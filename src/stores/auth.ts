import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  accessToken: string | null
  refreshToken: string | null
  email: string | null
  setAuth: (email: string, accessToken: string, refreshToken: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
      email: null,
      setAuth: (email, accessToken, refreshToken) => 
        set({ isAuthenticated: true, email, accessToken, refreshToken }),
      logout: () => 
        set({ isAuthenticated: false, accessToken: null, refreshToken: null, email: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
)