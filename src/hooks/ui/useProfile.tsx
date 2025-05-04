/* eslint-disable react-hooks/exhaustive-deps */
import { nanoid } from 'nanoid'
import { useMemo } from 'react'
import { BsImageFill } from 'react-icons/bs'
import { ImExit } from 'react-icons/im'
import { MdDelete, MdEmail, MdImagesearchRoller } from 'react-icons/md'
import { RiLockPasswordFill, RiProfileFill } from 'react-icons/ri'

import AccentText from '@/components/UI/AccentText'
import ButtonAsLink from '@/components/UI/ButtonAsLink'
import StatusBadge from '@/components/UI/StatusBadge'

import { useUserStore } from '@/store/useUserStore'

import { defaultImages } from '@/utils/defaultImages'
import { formatPhoneNumber } from '@/utils/formatPhoneNumber'
import { formatLabel } from '@/utils/generateDropdownOptions'
import { parsedDateToString } from '@/utils/parsedDateToString'

import { Action } from '@/types/props/Layout/ActionMenuProps'
import { PropertyListItem } from '@/types/props/Layout/PropertyListProps'

import { useCalculateAge } from './useCalculateAge'
import { useGetImage } from './useGetImage'
import useModal from './useModal'

export const useProfile = () => {
	const user = useUserStore((state) => state.user)
	const isLoading = useUserStore((state) => state.isLoading)
	const { onOpen, modalNames } = useModal()

	const fullName = `${user?.firstName} ${user?.lastName}`
	const nickname = user?.nickname

	const userAvatar = useGetImage({
		image: user?.avatars,
		defaultImage: defaultImages.avatar,
	})
	const userPoster = useGetImage({
		image: user?.posters,
		defaultImage: defaultImages.poster,
	})

	const memoBirthDate = useMemo(() => user?.birthDate || new Date(), [])
	const userAge = useCalculateAge(memoBirthDate)

	const userInfoList: PropertyListItem[] = useMemo(
		() => [
			{
				id: nanoid(),
				property: 'Email',
				value: user?.email || '---',
			},
			{
				id: nanoid(),
				property: 'Email activated',
				value: (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{!user?.isActivated && (
							<ButtonAsLink
								onClick={() => onOpen(modalNames.RESEND_EMAIL)}
								label="Send activation email"
								color="yellow"
								hoverColor="gray"
								margin="0 15px 0 0"
							/>
						)}
						<StatusBadge status={!!user?.isActivated} />
					</div>
				),
			},
			{
				id: nanoid(),
				property: 'Password',
				value: '************',
			},
			{
				id: nanoid(),
				property: 'Birthday',
				value: (
					<>
						{parsedDateToString(user?.birthDate) || '---'}
						{user?.birthDate && (
							<AccentText color="yellow"> | {userAge.detailedAge}</AccentText>
						)}
					</>
				),
			},
			{
				id: nanoid(),
				property: 'Phone number',
				value: formatPhoneNumber(user?.phoneNumber || '---'),
			},
			{
				id: nanoid(),
				property: 'Gender',
				value: formatLabel(user?.gender || ''),
			},
			{
				id: nanoid(),
				property: 'Country',
				value: user?.location?.country || '---',
			},
			{
				id: nanoid(),
				property: 'City',
				value: user?.location?.city || '---',
			},
			{
				id: nanoid(),
				property: 'Postal code',
				value: user?.location?.postalCode || '---',
			},
		],
		[user, userAge.detailedAge]
	)

	const settingActions: Action[] = useMemo(
		() => [
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.EDIT_EMAIL),
				label: 'Edit email',
				icon: <MdEmail />,
			},
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.EDIT_PASSWORD),
				label: 'Edit password',
				icon: <RiLockPasswordFill />,
			},
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.EDIT_PROFILE),
				label: 'Edit profile',
				icon: <RiProfileFill />,
			},
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.DELETE_PROFILE),
				label: 'Delete profile',
				icon: <MdDelete />,
			},
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.EXIT_PROFILE),
				label: 'Exit',
				icon: <ImExit />,
			},
		],
		[]
	)

	const uploadActions = useMemo(
		() => [
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.UPLOAD_AVATAR),
				label: 'Upload avatar',
				icon: <BsImageFill />,
			},
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.UPLOAD_POSTER),
				label: 'Upload poster',
				icon: <MdImagesearchRoller />,
			},
		],
		[]
	)

	return {
		fullName,
		nickname,
		userAvatar,
		userPoster,
		userInfoList,
		uploadActions,
		settingActions,
		isLoading,
	}
}
