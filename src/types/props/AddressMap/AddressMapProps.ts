import { Address } from '@/types/types/Contact'

export type AddressMapProps = {
	address: Address
	width?: string
	height?: string
	margin?: string
	zoom?: number
}

export type WrapperProps = Pick<AddressMapProps, 'width' | 'height' | 'margin'>
