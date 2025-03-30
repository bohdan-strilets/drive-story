import styled from '@emotion/styled'
import { IoMdImages } from 'react-icons/io'

import { ButtonProps } from '@/types/props/UI/OpenGalleryButtonProps'

import { getColor } from '@/styles/helpers/getColor'

export const Button = styled.button<ButtonProps>`
	position: relative;
	display: inline-block;

	width: ${({ width }) => width};

	background-color: transparent;
	border: none;
	outline: none;

	cursor: pointer;

	:hover::before,
	:focus::before,
	:hover .gallery-icon,
	:focus .gallery-icon {
		opacity: 1;
	}

	:active .gallery-icon {
		transform: translate(-50%, -50%) scale(1.03);
	}

	::before {
		content: '';

		position: absolute;
		top: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;

		background-color: rgba(255, 255, 255, 0.5);

		opacity: 0;
		transition: opacity var(--hover-effect);
	}
`

export const Icon = styled(IoMdImages)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 84px;
	height: 84px;
	color: ${getColor('gray')};

	opacity: 0;
	transition: opacity var(--hover-effect);
`
