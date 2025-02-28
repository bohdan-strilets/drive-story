/**
 * Generates a slide-in animation configuration for Framer Motion.
 *
 * @param direction - The direction from which the element should slide in.
 *                    Use 'left' for sliding in from the left (default) or 'right' for sliding in from the right.
 * @param duration - The duration of the animation in seconds (default is 0.7).
 *
 * @returns An object containing `initial`, `animate`, and `transition` properties for use with Framer Motion.
 */
export const slideIn = (
	direction: 'left' | 'right' = 'left',
	duration = 0.7
) => ({
	initial: { x: direction === 'left' ? '-100%' : '100%', opacity: 0 },
	animate: { x: 0, opacity: 1 },
	exit: { x: direction === 'left' ? '-100%' : '100%', opacity: 0 },
	transition: { duration, ease: 'easeInOut' },
})
