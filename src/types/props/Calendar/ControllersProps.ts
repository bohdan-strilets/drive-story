import { Control } from 'react-hook-form'

export type ControllersProps = {
	currentDate: Date
	handleNextMonth: () => void
	handlePreviousMonth: () => void
	control: Control
	minDate: Date
	maxDate: Date
}
