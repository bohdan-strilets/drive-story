import toast from 'react-hot-toast'

export const handleError = (error: unknown): void => {
	let errorMessage = 'Something went wrong. Please try again.'

	if (error instanceof Error) {
		errorMessage = error.message
	}

	toast.error(errorMessage)
}
