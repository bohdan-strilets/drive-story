import { FC, useEffect, useState } from 'react'

import { bytesToMegabytes } from '@/utils/bytesToMegabytes'

import { PreviewProps } from '@/types/props/Uploader/PreviewProps'

import { slideBounce } from '@/animations/slideBounce'

import {
	Container,
	Image,
	ImageName,
	ImageSize,
	Wrapper,
} from './Preview.styled'

const Preview: FC<PreviewProps> = ({
	previewSource,
	fileInfo,
	validationSizeFile,
}) => {
	const [imageSize, setImageSize] = useState(0)

	useEffect(() => {
		if (fileInfo) {
			setImageSize(bytesToMegabytes(fileInfo.size))
		}
	}, [fileInfo])

	return (
		<Wrapper {...slideBounce()}>
			<div>
				<Image src={previewSource} alt="User selected image" />
				{fileInfo && (
					<Container>
						<ImageName>{fileInfo?.name || 'Selected image'}</ImageName>
						<ImageSize
							imageSize={imageSize}
							validationSizeFile={validationSizeFile}
						>
							{imageSize} KB
						</ImageSize>
					</Container>
				)}
			</div>
		</Wrapper>
	)
}

export default Preview
