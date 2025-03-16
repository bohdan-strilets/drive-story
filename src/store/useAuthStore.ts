import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { AuthState } from '@/types/store/AuthState'

import { useUserStore } from './useUserStore'

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			token: null,
			isLoggedIn: false,

			setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
			setToken: (token) => set({ token }),
			logout: () => {
				useUserStore.getState().setUser(null)
				set({ isLoggedIn: false, token: null })
			},
		}),
		{ name: 'auth-storage' }
	)
)
