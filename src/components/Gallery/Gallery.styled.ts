import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { ItemProps } from '@/types/props/Gallery/GalleryProps'

import { cardGridContainer } from '@/styles/mixins/cardGridContainer'
import { cardGridItem } from '@/styles/mixins/cardGridItem'

export const List = styled(motion.ul)`
	${cardGridContainer('5px')}
`

export const Item = styled(motion.li)<ItemProps>`
	${cardGridItem('5px')}
	height: ${({ itemHeight }) => itemHeight};
`

export const ImageContainer = styled.div`
	position: relative;

	width: 100%;
	height: 100%;

	background-color: transparent;

	overflow: hidden;
	cursor: pointer;

	:hover .overlay {
		opacity: 1;
		transform: translateY(0);
	}
`
