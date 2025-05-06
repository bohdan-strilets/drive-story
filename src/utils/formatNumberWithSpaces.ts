export const formatNumberWithSpaces = (value: number): string => {
	return Number(value).toLocaleString('en-US').replace(/,/g, ' ')
}
