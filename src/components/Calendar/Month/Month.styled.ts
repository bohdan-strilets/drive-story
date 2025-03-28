import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	${flexCenterDirection()}
	flex-wrap: wrap;
`

export const Week = styled.ul`
	${flexCenterDirection()}
	justify-content: space-between;

	width: 100%;
	margin-bottom: 3px;
`

export const Day = styled(motion.li)`
	width: 100%;
	height: 40px;

	margin-right: 3px;

	:last-child {
		margin-right: 0;
	}
`
