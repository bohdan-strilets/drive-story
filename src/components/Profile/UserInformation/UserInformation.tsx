import { FC, useMemo } from 'react'

import ButtonAsLink from '@/components/UI/ButtonAsLink'
import StatusBadge from '@/components/UI/StatusBadge'

import { useCalculateAge } from '@/hooks/ui/useCalculateAge'
import useModal from '@/hooks/ui/useModal'

import { formatPhoneNumber } from '@/utils/formatPhoneNumber'
import { formatLabel } from '@/utils/generateDropdownOptions'
import { parsedDateToString } from '@/utils/parsedDateToString'

import { UserInformationProps } from '@/types/props/Profile/UserInformationProps'

import { fadeSlide } from '@/animations/fadeSlide'

import {
	Age,
	Group,
	Item,
	List,
	Property,
	Value,
} from './UserInformation.styled'

const UserInformation: FC<UserInformationProps> = ({
	email,
	isActivated,
	birthDate,
	phoneNumber,
	gender,
	country,
	city,
	postalCode,
}) => {
	const { modalNames, onOpen } = useModal()
	const memoBirthDate = useMemo(() => birthDate || new Date(), [])
	const userAge = useCalculateAge(memoBirthDate)

	return (
		<List>
			<Item {...fadeSlide(0, -20, 0.1, 0.5)}>
				<Property>Email:</Property>
				<Value>{email || '---'}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.2, 0.5)}>
				<Property>Email activated:</Property>
				<Group>
					{!isActivated && (
						<ButtonAsLink
							onClick={() => onOpen(modalNames.RESEND_EMAIL)}
							label="Send activation email"
							color="yellow"
							hoverColor="gray"
							margin="0 15px 0 0"
						/>
					)}
					<StatusBadge status={isActivated} />
				</Group>
			</Item>
			<Item {...fadeSlide(0, -20, 0.3, 0.5)}>
				<Property>Password:</Property>
				<Value>************</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.4, 0.5)}>
				<Property>Birthday:</Property>
				<Value>
					{parsedDateToString(birthDate) || '---'}
					{birthDate && <Age> | {userAge.detailedAge}</Age>}
				</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.5, 0.5)}>
				<Property>Phone number:</Property>
				<Value>{formatPhoneNumber(phoneNumber || '---')}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.6, 0.5)}>
				<Property>Gender:</Property>
				<Value>{formatLabel(gender || '')}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.7, 0.5)}>
				<Property>Country:</Property>
				<Value>{country || '---'}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.8, 0.5)}>
				<Property>City:</Property>
				<Value>{city || '---'}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.9, 0.5)}>
				<Property>Postal code:</Property>
				<Value>{postalCode || '---'}</Value>
			</Item>
		</List>
	)
}

export default UserInformation
