import { FormMode } from '@/types/types/FormMode'

export type TagsProps = {
	tags: string[]
	length?: number
	mode?: FormMode
	deleteTag?: () => void
}
