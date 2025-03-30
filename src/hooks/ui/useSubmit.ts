/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { handleError } from '@/utils/handleError'

import { useSubmitParams } from '@/types/hooks/useSubmitParams'

import useModal from './useModal'

const useSubmit = <T, U = void>({
	callback,
	navigateTo,
	navigateOptions,
	successMessage,
	isCloseModal = false,
}: useSubmitParams<T, U>) => {
	const navigate = useNavigate()
	const { onClose } = useModal()

	return async (params: U extends void ? void : U) => {
		try {
			const response = await callback(params as any)

			if (!response.success) {
				toast.error(
					response.message || 'Something went wrong, please try again'
				)
				return
			}

			if (isCloseModal) {
				onClose()
			}
			if (navigateTo) {
				await navigate(navigateTo, navigateOptions)
			}
			if (successMessage) {
				toast.success(successMessage)
			}
		} catch (error) {
			handleError(error)
		}
	}
}

export default useSubmit
