/**
 * Generates a spring-like animation configuration for a digit using Framer Motion.
 *
 * @param duration - The duration of the animation in seconds (default is 2).
 *
 * @returns An object containing `animate` and `transition` properties for use with Framer Motion.
 */
export const spring = (duration = 2) => ({
	animate: {
		y: [0, -10, 7, -3, 1, 0],
		scale: [1, 1.1, 0.95, 1.05, 1, 1],
	},
	transition: {
		duration,
		ease: 'easeInOut',
		repeat: Infinity,
	},
})
