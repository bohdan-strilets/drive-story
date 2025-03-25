import { FC } from 'react'

import StatusBadge from '@/components/UI/StatusBadge'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { UserInformationProps } from '@/types/props/Profile/UserInformationProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { Item, List, Property, Value } from './UserInformation.styled'

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
	return (
		<List>
			<Item {...fadeSlide(0, -20, 0.1, 0.5)}>
				<Property>Email:</Property>
				<Value>{email || '---'}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.2, 0.5)}>
				<Property>Email activated:</Property>
				<StatusBadge status={isActivated} />
			</Item>
			<Item {...fadeSlide(0, -20, 0.3, 0.5)}>
				<Property>Password:</Property>
				<Value>************</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.4, 0.5)}>
				<Property>Birthday:</Property>
				<Value>{parsedDateToString(birthDate) || '---'}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.5, 0.5)}>
				<Property>Phone number:</Property>
				<Value>{phoneNumber || '---'}</Value>
			</Item>
			<Item {...fadeSlide(0, -20, 0.6, 0.5)}>
				<Property>Gender:</Property>
				<Value>{gender}</Value>
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
