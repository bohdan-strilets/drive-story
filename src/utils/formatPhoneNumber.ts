export const formatPhoneNumber = (input: string): string => {
	const digits = input.replace(/\D/g, '')
	if (digits.length !== 9) {
		return digits
	}

	return digits.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
}
