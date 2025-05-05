import { FC } from 'react'

import useResponsive from '@/hooks/ui/useResponsive'

import emptyListImage from '@/assets/emptyList/empty-list.webp'

import { EmptyStateProps } from '@/types/props/UI/EmptyStateProps'

import ImageBox from '../ImageBox'
import Paragraph from '../Paragraph'
import Title from '../Title'

import { Wrapper } from './EmptyState.styled'

const EmptyState: FC<EmptyStateProps> = ({ title, message }) => {
	const { maxTablet } = useResponsive()

	return (
		<Wrapper>
			<Title fontSize={22} textAlign="center" color="yellow">
				{title}
			</Title>
			<ImageBox
				imageUrl={emptyListImage}
				width="100%"
				height={maxTablet ? '300px' : '500px'}
				size="contain"
			/>
			<Paragraph color="black" fontWeight={600} textAlign="center">
				{message}
			</Paragraph>
		</Wrapper>
	)
}

export default EmptyState
