/**
 * Generates a slide bounce animation configuration for Framer Motion.
 *
 * @param duration - The duration of the animation in seconds (default is 0.5).
 *
 * @returns An object containing `initial`, `animate`, `exit`, and `transition` properties for use with Framer Motion.
 */
export const slideBounce = (duration = 0.5) => ({
	initial: { y: '-100%' },
	animate: { y: ['0%', '1%', '0%'] },
	exit: { x: '-100%' },
	transition: { duration },
})
