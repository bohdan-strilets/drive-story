import { ReactNode } from 'react'

export type ModalProps = {
	children: ReactNode
	title: string
	isDialog?: boolean
	positiveBtnLabel?: string
	negativeBtnLabel?: string
	positiveCallback?: () => void
	negativeCallback?: () => void
}
