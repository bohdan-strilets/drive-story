import { ToastOptions } from 'react-hot-toast'

export interface CustomToastOptions extends ToastOptions {
	success?: ToastOptions
	error?: ToastOptions
	loading?: ToastOptions
	default?: ToastOptions
}
