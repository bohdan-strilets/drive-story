import { useCallback } from 'react'

export const useKeyboard = () => {
	const onSpaceDown = useCallback(
		(e: React.KeyboardEvent<HTMLDivElement>, callback: () => void) => {
			if (e.key === ' ') {
				e.preventDefault()
				callback()
			}
		},
		[]
	)

	const onEnterDown = useCallback(
		(e: React.KeyboardEvent<HTMLDivElement>, callback: () => void) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				callback()
			}
		},
		[]
	)

	return { onSpaceDown, onEnterDown }
}

export default useKeyboard
