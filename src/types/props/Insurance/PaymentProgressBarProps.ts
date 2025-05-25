import { Payment } from '@/types/types/Payment'

export type PaymentProgressBarProps = {
	payments: Payment[]
	totalAmount?: number
}

export type PaidedProps = {
	width: number
}

export type BadgeContainerProps = {
	position: number
}

export type MarkerProps = {
	isPaid: boolean
	isNextRate: boolean
}

export type TooltipProps = {
	isPaid: boolean
}
