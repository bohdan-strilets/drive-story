import { FC, useMemo } from 'react'

import { useCalculateAge } from '@/hooks/ui/useCalculateAge'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { ProfileMetaProps } from '@/types/props/Profile/ProfileMetaProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { Age, Item, List, Property, Value } from './ProfileMeta.styled'

const ProfileMeta: FC<ProfileMetaProps> = ({
	userId,
	createdDate,
	updatedDate,
}) => {
	const memoCreatedDate = useMemo(() => createdDate || new Date(), [])
	const userOnPortal = useCalculateAge(memoCreatedDate)

	return (
		<List>
			<Item {...fadeSlide(0, -20, 0.1, 0.5)}>
				<Property>ID:</Property>
				<Value>{userId || '---'}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.2, 0.5)}>
				<Property>Date of registration:</Property>
				<Value>
					{parsedDateToString(createdDate) || '---'}
					<Age> | {createdDate && userOnPortal.detailedAge}</Age>
				</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.3, 0.5)}>
				<Property>Latest changes:</Property>
				<Value>{parsedDateToString(updatedDate) || '---'}</Value>
			</Item>
		</List>
	)
}

export default ProfileMeta
