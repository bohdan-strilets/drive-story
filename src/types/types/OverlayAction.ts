import { ReactNode } from 'react'

export type OverlayAction = {
	id: string
	callback: (imageUrl: string) => void
	icon: ReactNode
	label: string
}
