import { create } from 'zustand'

import { CarState } from '@/types/store/CarState'

export const useCarStore = create<CarState>()((set) => ({
	car: null,
	cars: null,

	setCar: (car) => set({ car }),
	setCars: (cars) => set({ cars }),
}))
