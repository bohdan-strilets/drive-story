import { MouseEvent, useCallback, useState } from 'react'

const useMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const onOpen = useCallback(() => setIsOpen(true), [])
	const onClose = useCallback(() => setIsOpen(false), [])

	const onBackdropClick = useCallback(
		(e: MouseEvent<HTMLDivElement>) => {
			if (e.target === e.currentTarget) onClose()
		},
		[onClose]
	)

	return { isOpen, onOpen, onClose, onBackdropClick }
}

export default useMenu
