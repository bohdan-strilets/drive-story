import { FC, useMemo } from 'react'

import { useCalculateAge } from '@/hooks/ui/useCalculateAge'

import { useUserStore } from '@/store/useUserStore'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { fadeSlide } from '@/animations/fadeSlide'

import { Age, Item, List, Property, Value } from './ProfileMeta.styled'

const ProfileMeta: FC = () => {
	const user = useUserStore((state) => state.user)

	const memoCreatedDate = useMemo(() => user?.createdAt || new Date(), [user])
	const userOnPortal = useCalculateAge(memoCreatedDate)

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
					<Age> | {user?.createdAt && userOnPortal.detailedAge}</Age>
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
