import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { ImageSizeProps } from '@/types/props/Uploader/PreviewProps'

import { breakpoints } from '@/styles/media/breakpoints'

export const Wrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
`

export const Image = styled.img`
	width: 258px;
	margin-bottom: 15px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 400px;
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		width: 500px;
	}
`

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const ImageName = styled.p`
	font-weight: 700;
`

export const ImageSize = styled.p<ImageSizeProps>`
	color: ${({ imageSize, validationSizeFile }) =>
		imageSize > validationSizeFile ? 'var(--red-color)' : 'var(--green-color)'};
`
