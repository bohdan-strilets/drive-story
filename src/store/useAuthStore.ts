import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { AuthState } from '@/types/store/AuthState'

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			token: null,
			isLoggedIn: false,

			setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
			setToken: (token) => set({ token }),
		}),
		{ name: 'auth-storage' }
	)
)
