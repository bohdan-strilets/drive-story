import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { ImageProps } from '@/types/props/UI/ImageBoxProps'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Image = styled(motion.div)<ImageProps>`
	position: relative;

	${flexCenterDirection('column')}
	justify-content: start;
	align-items: start;

	width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: ${({ margin }) => margin};
	padding: ${({ padding }) => padding};

	background-image: ${({ imageUrl, gradient }) =>
		gradient ? `${gradient}, url(${imageUrl})` : `url(${imageUrl})`};

	background-size: ${({ size }) => size};
	background-position: center;
	background-repeat: no-repeat;

	box-shadow: ${({ isShadow }) => isShadow && 'var(--box-shadow)'};
	border-radius: ${({ isBorder }) => isBorder && '5px'};
	border: ${({ isBorder }) =>
		isBorder && `3px solid ${getColor('rgba(165, 165, 165, 0.6)')}`};
`
