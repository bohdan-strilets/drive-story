import { useCallback, useEffect } from 'react'

import { Key, KeyHandler } from '@/types/hooks/useKeyboardParams'

export const useKeyboard = (handlers: Partial<Record<Key, KeyHandler>>) => {
	const keyDownHandler = useCallback(
		(e: KeyboardEvent) => {
			if (handlers[e.code as Key]) {
				e.preventDefault()
				handlers[e.code as Key]?.()
			}
		},
		[handlers]
	)

	useEffect(() => {
		window.addEventListener('keydown', keyDownHandler)
		return () => window.removeEventListener('keydown', keyDownHandler)
	}, [keyDownHandler])

	return null
}

export default useKeyboard
