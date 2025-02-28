/**
 * Generates a slide-down fade-in animation configuration for Framer Motion.
 *
 * @param delay - The delay before the animation starts in seconds (default is 0).
 * @param duration - The duration of the animation in seconds (default is 0.5).
 *
 * @returns An object containing `initial`, `animate`, and `transition` properties for use with Framer Motion.
 */
export const slideDownFadeIn = (delay = 0, duration = 0.5) => ({
	initial: { opacity: 0, y: -20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
	transition: { delay, duration, ease: 'easeOut' },
})
