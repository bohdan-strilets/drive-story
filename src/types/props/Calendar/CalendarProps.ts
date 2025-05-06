export type CalendarProps = {
	currentDate: Date
	setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
	onChange: (...event: unknown[]) => void
	toggle: () => void
	minDate: Date
	maxDate: Date
}
