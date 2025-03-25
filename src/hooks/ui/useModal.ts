import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import useKeyboard from './useKeyboard'

const useModal = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const POPUP_NAME = 'modal'

	const modalNames = {
		FORGOT_PASSWORD: 'forgot-password',
		WELCOME: 'welcome',
		RESEND_EMAIL: 'resend-email',
		EDIT_EMAIL: 'edit-email',
		EDIT_PASSWORD: 'edit-password',
	}

	const onOpen = useCallback(
		(modalName: string) => {
			const updatedParams = new URLSearchParams(searchParams)
			updatedParams.set(POPUP_NAME, modalName)
			setSearchParams(updatedParams)
		},
		[searchParams, setSearchParams]
	)

	const onClose = useCallback(() => {
		const updatedParams = new URLSearchParams(searchParams)
		updatedParams.delete(POPUP_NAME)
		setSearchParams(updatedParams)
	}, [searchParams, setSearchParams])

	const checkQueryParam = (modalName: string) => {
		const modal = searchParams.get(POPUP_NAME)
		return modal === modalName
	}

	const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) onClose()
	}

	useKeyboard({
		Escape: onClose,
	})

	return {
		modalNames,
		onOpen,
		onClose,
		checkQueryParam,
		onBackdropClick,
	}
}

export default useModal
