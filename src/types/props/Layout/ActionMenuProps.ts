import { ActionDescriptor } from '@/types/types/ActionDescriptor'

export type ActionMenuProps<T> = {
	descriptors: ActionDescriptor<T>[]
	context: T
}
