/**
 * Generates a fade-in animation configuration for Framer Motion.
 *
 * @param duration - The duration of the animation in seconds (default is 0.7).
 *
 * @returns An object containing `initial`, `animate`, and `transition` properties for use with Framer Motion.
 */
export const fadeIn = (duration = 0.7) => ({
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { duration, ease: 'easeInOut' },
})
