import { Control } from 'react-hook-form'

export type ControllersProps = {
	handleNextMonth: () => void
	handlePreviousMonth: () => void
	control: Control
	minDate: Date
	maxDate: Date
}
