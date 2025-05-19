import { ReactNode } from 'react'

import { ModalName } from './ModalName'

export type ActionContext = {
	onOpen: (name: ModalName) => void
	navigate?: (route: string) => void
}

export type ActionParams = ActionContext & {
	carId?: string
	insuranceId?: string
	inspectionId?: string
}

export type ActionDescriptor = {
	key: string
	label: string
	icon: ReactNode
	callback: () => void
}
