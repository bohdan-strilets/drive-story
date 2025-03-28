import { RefObject, useEffect, useRef } from 'react'

type Handler = (event: MouseEvent | TouchEvent) => void

const useClickOutside = <T extends HTMLElement = HTMLDivElement>(
	handler: Handler
): RefObject<T> => {
	const ref = useRef<T>(null)

	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return
			}
			handler(event)
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [handler])

	return ref as React.RefObject<T>
}

export default useClickOutside
