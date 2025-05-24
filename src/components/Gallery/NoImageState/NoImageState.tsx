import { FC } from 'react'

import Paragraph from '@/components/UI/Paragraph'

import useResponsive from '@/hooks/ui/useResponsive'

import { ImageIcon, Wrapper } from './NoImageState.styled'

const NoImageState: FC = () => {
	const { maxMobile } = useResponsive()

	return (
		<Wrapper>
			<Paragraph
				color="gray"
				fontWeight={500}
				fontSize={maxMobile ? 12 : 16}
				textAlign="center"
			>
				The gallery is empty...
			</Paragraph>

			<ImageIcon />

			<Paragraph
				color="gray"
				fontWeight={500}
				fontSize={maxMobile ? 12 : 16}
				textAlign="center"
			>
				You haven’t added any images yet. Upload files using the form
			</Paragraph>
		</Wrapper>
	)
}

export default NoImageState
