import { HTMLMotionProps, Transition } from 'framer-motion'

/**
 * Generates a pulsing box-shadow animation config for Framer Motion.
 *
 * @param glow     Base glow color string without alpha (e.g. 'rgba(255,200,0,')
 * @param duration Duration of one full pulse cycle in seconds (default: 2)
 * @param delay    Delay between pulses in seconds (default: 0.5)
 *
 * @returns An object with `initial`, `animate`, `exit`, and `transition`
 *          properties ready to spread into a Framer Motion component.
 */

export const pulseGlow = (
	glow: string,
	duration = 2,
	delay = 0.5
): HTMLMotionProps<'div'> => {
	const transition: Transition = {
		duration,
		ease: 'easeInOut',
		repeat: Infinity,
		repeatType: 'loop',
		repeatDelay: delay,
	}

	return {
		initial: {
			boxShadow: `1px 1px 7px 2px ${glow}0.25)`,
		},
		animate: {
			boxShadow: [
				`1px 1px 15px 5px ${glow}0.15)`,
				`0px 0px 20px 10px ${glow}1)`,
				`1px 1px 15px 5px ${glow}0.15)`,
			],
		},
		exit: {
			boxShadow: `1px 1px 7px 2px ${glow}0.25)`,
		},
		transition,
	}
}
