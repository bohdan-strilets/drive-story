import { ReactNode } from 'react'

import { Action } from '../props/Layout/ActionMenuProps'

export type ActionContext = {
	onOpen: (name: string) => void
	modalNames: Record<string, string>
}

export type ActionDescriptor<T> = {
	key: string
	label: string
	icon: ReactNode
	getCallback: (context: T) => Action['callback']
}
