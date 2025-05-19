import { ReactNode } from 'react'

import { Action } from '../hooks/useGalleryManager'

import { ModalName } from './ModalName'

export type ActionContext = {
	onOpen: (name: ModalName) => void
	navigate?: (route: string) => void
	carId?: string
	insuranceId?: string
	inspectionId?: string
}

export type ActionDescriptor<T> = {
	key: string
	label: string
	icon: ReactNode
	getCallback: (context: T) => Action['callback']
}
