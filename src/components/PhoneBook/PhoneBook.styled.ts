import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { getColor } from '@/styles/helpers/getColor'

export const Item = styled(motion.li)`
	border-radius: 5px;
	margin-bottom: 3px;
	padding: 5px;

	cursor: pointer;
	transition: box-shadow var(--hover-effect);

	:nth-of-type(odd) {
		background-color: ${getColor('#e8e8e8')};
	}

	:last-child {
		margin-bottom: 0;
	}

	:hover,
	:focus {
		box-shadow: var(--box-shadow);
	}
`
