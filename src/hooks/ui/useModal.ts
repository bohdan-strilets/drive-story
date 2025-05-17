import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import { MODAL_QUERY_PARAM } from '@/config/modalConfig'

import { ModalName } from '@/types/types/ModalName'

import useKeyboard from './useKeyboard'

const useModal = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const onOpen = useCallback(
		(modalName: ModalName) => {
			const updatedParams = new URLSearchParams(searchParams)
			updatedParams.set(MODAL_QUERY_PARAM, modalName)
			setSearchParams(updatedParams, { replace: true })
		},
		[searchParams, setSearchParams]
	)

	const onClose = useCallback(() => {
		const updatedParams = new URLSearchParams(searchParams)
		updatedParams.delete(MODAL_QUERY_PARAM)
		setSearchParams(updatedParams, { replace: true })
	}, [searchParams, setSearchParams])

	const checkQueryParam = (modalName: ModalName) => {
		const modal = searchParams.get(MODAL_QUERY_PARAM)
		return modal === modalName
	}

	useKeyboard({
		Escape: onClose,
	})

	return {
		onOpen,
		onClose,
		checkQueryParam,
	}
}

export default useModal
