import { ReactNode } from 'react'

import { Action } from '../hooks/useGalleryManager'

export type ActionContext = {
	onOpen: (name: string) => void
	modalNames: Record<string, string>
	navigate: (route: string) => void
	carId: string
}

export type ActionDescriptor<T> = {
	key: string
	label: string
	icon: ReactNode
	getCallback: (context: T) => Action['callback']
}
