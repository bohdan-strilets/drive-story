import { FieldDescriptor } from '@/types/types/FieldDescriptor'

export type PropertyListProps<T> = {
	descriptors: FieldDescriptor<T>[]
	context: T | null
}
