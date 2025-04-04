import styled from '@emotion/styled'

import { ImageProps } from '@/types/props/UI/ImageBoxProps'

import { getColor } from '@/styles/helpers/getColor'

export const Image = styled.div<ImageProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: ${({ margin }) => margin};

	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	background-size: ${({ size }) => size};
	background-position: center;
	background-repeat: no-repeat;

	box-shadow: ${({ isShadow }) => isShadow && 'var(--box-shadow)'};
	border-radius: ${({ isBorder }) => isBorder && '5px'};
	border: ${({ isBorder }) =>
		isBorder && `3px solid ${getColor('rgba(165, 165, 165, 0.6)')}`};
`
