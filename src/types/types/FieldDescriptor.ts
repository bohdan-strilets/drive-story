import { ReactNode } from 'react'

export type FieldDescriptor<T> = {
	key: string
	label: string
	render: (context: T | null) => ReactNode
}
