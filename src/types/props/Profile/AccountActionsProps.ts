import { ReactNode } from 'react'

export type Action = {
	id: string
	callback: () => void
	label: string
	icon: ReactNode
}

export type AccountActionsProps = {
	actions: Action[]
}
