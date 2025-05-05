import { FC } from 'react'

import useResponsive from '@/hooks/ui/useResponsive'

import emptyListImage from '@/assets/emptyList/empty-list.webp'

import ImageBox from '../ImageBox'
import Paragraph from '../Paragraph'
import Title from '../Title'

import { Wrapper } from './EmptyState.styled'

const EmptyState: FC = () => {
	const { maxTablet } = useResponsive()

	return (
		<Wrapper>
			<Title fontSize={22} textAlign="center" color="yellow">
				Nothing added yet...
			</Title>
			<ImageBox
				imageUrl={emptyListImage}
				width="100%"
				height={maxTablet ? '300px' : '500px'}
				size="contain"
			/>
			<Paragraph color="black" fontWeight={600} textAlign="center">
				Looks like you haven't added anything yet.... Seems like it's high time
				to do it
			</Paragraph>
		</Wrapper>
	)
}

export default EmptyState
