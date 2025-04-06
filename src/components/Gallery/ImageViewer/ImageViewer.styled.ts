import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Button = styled.button`
	position: absolute;
	top: 50px;
	right: 50px;

	${flexCenterDirection()}

	width: 40px;
	height: 30px;

	border-radius: 5px;
	background: rgba(255, 255, 255, 0.5);
	backdrop-filter: var(--blur-effect);

	cursor: pointer;
	transition: background var(--hover-effect);

	:hover,
	:focus {
		background: ${getColor('white')};
	}
`

export const Image = styled(motion.img)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	max-width: 80%;
	max-height: 80%;
	width: auto;
	height: auto;
	object-fit: contain;

	box-shadow: var(--box-shadow);
`
