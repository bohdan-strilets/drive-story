import { FC } from 'react'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { ProfileMetaProps } from '@/types/props/Profile/ProfileMetaProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { Item, List, Property, Value } from './ProfileMeta.styled'

const ProfileMeta: FC<ProfileMetaProps> = ({
	userId,
	createdDate,
	updatedDate,
}) => {
	return (
		<List>
			<Item {...fadeSlide(0, -20, 0.1, 0.5)}>
				<Property>ID:</Property>
				<Value>{userId || '---'}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.2, 0.5)}>
				<Property>Date of registration:</Property>
				<Value>{parsedDateToString(createdDate) || '---'}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.3, 0.5)}>
				<Property>Latest changes:</Property>
				<Value>{parsedDateToString(updatedDate) || '---'}</Value>
			</Item>
		</List>
	)
}

export default ProfileMeta
