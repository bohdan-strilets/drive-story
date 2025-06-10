import { FC } from 'react'

import AccentText from '@/components/UI/AccentText'

import { useCalculateAge } from '@/hooks/ui/useCalculateAge'

import { useUserStore } from '@/store/useUserStore'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { fadeSlide } from '@/animations/fadeSlide'

import { Item, List, Property, Value } from './ProfileMeta.styled'

const ProfileMeta: FC = () => {
	const user = useUserStore((state) => state.user)
	const userOnPortal = useCalculateAge(user?.createdAt)

	return (
		<List>
			<Item {...fadeSlide(0, -20, 0.1, 0.5)}>
				<Property>ID:</Property>
				<Value>{user?._id || '---'}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.2, 0.5)}>
				<Property>Date of registration:</Property>
				<Value>
					{parsedDateToString(user?.createdAt) || '---'}
					<AccentText color="black">
						{' '}
						| {user?.createdAt && userOnPortal.detailedAge}
					</AccentText>
				</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.3, 0.5)}>
				<Property>Latest changes:</Property>
				<Value>{parsedDateToString(user?.updatedAt) || '---'}</Value>
			</Item>
		</List>
	)
}

export default ProfileMeta
