import { MouseEvent } from 'react'

export type MenuProps = {
	onClose: () => void
	onBackdropClick: (e: MouseEvent<HTMLDivElement>) => void
}
