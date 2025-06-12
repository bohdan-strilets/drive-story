import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { getColor } from '@/styles/helpers/getColor'

export const Item = styled(motion.li)`
	margin-bottom: 10px;
	padding: 5px;

	border: 1px solid #e8e8e8;
	border-radius: 5px;

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
