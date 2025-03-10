import { useCallback } from 'react'

export const useKeyboard = () => {
	const onSpaceDown = useCallback((e: KeyboardEvent, callback: () => void) => {
		if (e.code === ' ') {
			e.preventDefault()
			callback()
		}
	}, [])

	const onEnterDown = useCallback((e: KeyboardEvent, callback: () => void) => {
		if (e.code === 'Enter') {
			e.preventDefault()
			callback()
		}
	}, [])

	const onEscapeDown = useCallback((e: KeyboardEvent, callback: () => void) => {
		if (e.code === 'Escape') {
			e.preventDefault()
			callback()
		}
	}, [])

	return { onSpaceDown, onEnterDown, onEscapeDown }
}

export default useKeyboard
