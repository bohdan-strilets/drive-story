import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { cardGridContainer } from '@/styles/mixins/cardGridContainer'
import { cardGridItem } from '@/styles/mixins/cardGridItem'

export const List = styled.ul`
	${cardGridContainer('10px')}
`

export const Item = styled(motion.li)`
	${cardGridItem('10px')}
`
