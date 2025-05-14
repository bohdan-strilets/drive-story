import { FormMode } from '@/types/types/FormMode'

export type FormNavigationProps = {
	onPrev: () => void
	onNext: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>
	isFirst: boolean
	isLast: boolean
	isLoading: boolean
	mode: FormMode
}
