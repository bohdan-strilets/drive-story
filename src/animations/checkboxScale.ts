/**
 * Generates a scale animation configuration for Framer Motion to be used with the Checkbox.
 *
 * @param duration - The duration of the animation in seconds (default is 0.2).
 *
 * @returns An object containing a `scale` keyframe animation configuration and its transition.
 */
export const checkboxScale = (duration = 0.2) => ({
	scale: [1, 1.05, 1],
	transition: { duration },
})
