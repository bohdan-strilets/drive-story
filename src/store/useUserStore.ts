import { create } from 'zustand'

import { UserState } from '@/types/store/UserState'

export const useUserStore = create<UserState>()((set) => ({
	user: null,

	setUser: (user) => set({ user }),
}))
