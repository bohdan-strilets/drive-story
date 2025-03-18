import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled(motion.form)`
	${flexCenterDirection('column')}
`
