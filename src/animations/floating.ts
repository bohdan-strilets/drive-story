/**
 * Generates a floating animation configuration for Framer Motion.
 *
 * @param duration - The duration of the animation in seconds (default is 0.3).
 *
 * @returns An object containing `initial`, `animate`, `exit`, and `transition` properties for use with Framer Motion.
 */
export const floating = (duration = 0.3) => ({
	initial: { y: '0%', x: '-50%' },
	animate: { y: ['-50%', '-53%', '-50%'] },
	exit: { y: '0%', x: '-50%' },
	transition: { duration, ease: 'easeInOut' },
})
