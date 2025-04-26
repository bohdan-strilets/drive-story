import { create } from 'zustand'

import { UserState } from '@/types/store/UserState'

export const useUserStore = create<UserState>()((set) => ({
	user: null,
	isLoading: false,

	setUser: (user) => set({ user }),
	setIsLoading: (loading) => set({ isLoading: loading }),
}))
