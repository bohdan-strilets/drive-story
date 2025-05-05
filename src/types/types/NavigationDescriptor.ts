import { ReactNode } from 'react'

export type NavigationDescriptor = {
	key: string
	label: string
	icon: ReactNode
	route: string
}
