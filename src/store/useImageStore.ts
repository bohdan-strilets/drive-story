import { create } from 'zustand'

import { ImageState } from '@/types/store/ImageState'

export const useImageStore = create<ImageState>()((set) => ({
	image: null,

	setImage: (image) => set({ image }),
}))
