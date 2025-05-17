import { ReactNode } from 'react'

import { Action } from '../hooks/useGalleryManager'

export type ActionContext = {
	onOpen: (name: string) => void
	navigate?: (route: string) => void
	carId?: string
	insuranceId?: string
}

export type ActionDescriptor<T> = {
	key: string
	label: string
	icon: ReactNode
	getCallback: (context: T) => Action['callback']
}
