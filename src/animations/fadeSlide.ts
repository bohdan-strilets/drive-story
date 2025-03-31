/**
 * Generates a fade-in and slide animation configuration for Framer Motion.
 *
 * @param x - The horizontal offset in pixels (default is 0).
 * @param y - The vertical offset in pixels (default is -20).
 * @param delay - The delay before the animation starts in seconds (default is 0).
 * @param duration - The duration of the animation in seconds (default is 0.5).
 * @param ease - The easing function for the transition (default is 'easeOut').
 *
 * @returns An object containing `initial`, `animate`, `exit`, and `transition` properties for use with Framer Motion.
 */
export const fadeSlide = (
	x = 0,
	y = -20,
	delay = 0,
	duration = 0.5,
	ease = 'easeOut',
	isExit = true
) => ({
	initial: { opacity: 0, x, y },
	animate: { opacity: 1, x: 0, y: 0 },
	exit: isExit ? { opacity: 0, x, y } : undefined,
	transition: { delay, duration, ease },
})
