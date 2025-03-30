import { NavigateOptions } from 'react-router-dom'

import { ApiResponse } from '../types/ApiResponse'

export type useSubmitParams<T = unknown, U = void> = {
	callback: U extends void
		? () => Promise<ApiResponse<T>>
		: (params: U) => Promise<ApiResponse<T>>
	navigateTo?: string
	navigateOptions?: NavigateOptions
	successMessage?: string
	isCloseModal?: boolean
}
