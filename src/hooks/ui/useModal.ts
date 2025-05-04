import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import useKeyboard from './useKeyboard'

const useModal = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const POPUP_NAME = 'modal'

	const modalNames = useMemo(() => {
		return {
			FORGOT_PASSWORD: 'forgot-password',
			WELCOME: 'welcome',
			RESEND_EMAIL: 'resend-email',
			EDIT_EMAIL: 'edit-email',
			EDIT_PASSWORD: 'edit-password',
			EDIT_PROFILE: 'edit-profile',
			EXIT_PROFILE: 'exit-profile',
			DELETE_PROFILE: 'delete-profile',
			USER_AVATARS: 'user-avatars',
			USER_POSTERS: 'user-posters',
			UPLOAD_AVATAR: 'upload-avatar',
			UPLOAD_POSTER: 'upload-poster',
			ADD_CAR: 'add-car',
			UPLOAD_CAR_PHOTO: 'upload-car-photo',
		}
	}, [])

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

	useKeyboard({
		Escape: onClose,
	})

	return {
		modalNames,
		onOpen,
		onClose,
		checkQueryParam,
	}
}

export default useModal
