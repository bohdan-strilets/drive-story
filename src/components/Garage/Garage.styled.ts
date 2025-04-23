import styled from '@emotion/styled'
import { IoMdCloudUpload } from 'react-icons/io'

import { getColor } from '@/styles/helpers/getColor'

export const Button = styled.button`
	width: 100%;
	height: 260px;

	border-radius: 5px;
	background-color: ${getColor('gray')};
	margin-bottom: 15px;

	cursor: pointer;

	:hover .upload-icon,
	:focus .upload-icon,
	:hover p,
	:focus p {
		color: ${getColor('black')};
	}

	:active {
		transform: scale(0.997);
	}
`

export const Icon = styled(IoMdCloudUpload)`
	width: 160px;
	height: 160px;

	color: ${getColor('white')};
	transition: color var(--hover-effect);
`

export const Label = styled.p`
	text-transform: uppercase;
	font-size: 24px;
	font-weight: 900;

	color: ${getColor('white')};
	transition: color var(--hover-effect);
`
