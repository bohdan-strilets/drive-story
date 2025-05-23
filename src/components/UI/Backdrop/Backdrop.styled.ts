import styled from '@emotion/styled'
import { motion } from 'motion/react'

export const Wrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;

	width: 100vw;
	height: 100vh;

	background: var(--black-transparent-gradient);
	backdrop-filter: var(--blur-effect);
`
