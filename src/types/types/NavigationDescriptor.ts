import { ReactNode } from 'react'

import { RouteName } from './RouteName'

export type NavigationDescriptor = {
	key: string
	label: string
	icon: ReactNode
	route: RouteName
}
