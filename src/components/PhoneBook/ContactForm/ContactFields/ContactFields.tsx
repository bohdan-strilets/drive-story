import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import Button from '@/components/UI/Button'
import DropdownList from '@/components/UI/DropdownList'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import { generateDropdownOptions } from '@/utils/generateDropdownOptions'
import { generateHoursArr } from '@/utils/generateHoursArr'

import { ContactFieldsProps } from '@/types/props/PhoneBook/ContactFieldsProps'

import { contactRules } from '@/validation/rules/contactRules'
import { Fields } from '@/validation/schemas/ContactSchema'

import Tags from '../../Tags'

import { Group } from './ContactFields.styled'

const ContactFields: FC<ContactFieldsProps> = ({
	getSpecializations,
	initialSpecialization,
}) => {
	const [specializations, setSpecializations] = useState<string[]>([])

	const { control, getValues, resetField } = useFormContext<Fields>()

	const hours = generateHoursArr()
	const hoursOptions = generateDropdownOptions(hours)

	const addItem = () => {
		const value = getValues('specializations')
		if (typeof value === 'string') {
			setSpecializations((state) => [...state, value])
			resetField('specializations')
		}
	}

	const deleteLastItem = () => {
		const updatedSpecializations = specializations.slice(0, -1)
		setSpecializations(updatedSpecializations)
	}

	useEffect(() => {
		getSpecializations(specializations)
	}, [getSpecializations, specializations])

	useEffect(() => {
		setSpecializations(initialSpecialization ? initialSpecialization : [])
	}, [initialSpecialization])

	return (
		<>
			<Title fontSize={24} textAlign="left" color="black">
				Contact information
			</Title>
			<TextInput
				control={control}
				label="Full Name"
				name="name"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					minLength: contactRules.name.min,
					maxLength: contactRules.name.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="Phone number"
				name="phone"
				type="tel"
				width="100%"
				margin="0 0 15px 0"
				mask="000 000 000"
				unmask={true}
				rules={{ required: true }}
			/>
			<TextInput
				control={control}
				label="Email"
				name="email"
				type="email"
				width="100%"
				margin="0 0 15px 0"
			/>
			<TextInput
				control={control}
				label="Map link"
				name="mapLink"
				type="text"
				width="100%"
				margin="0 0 15px 0"
			/>
			<TextInput
				control={control}
				label="Website URL"
				name="website"
				type="text"
				width="100%"
				margin="0 0 15px 0"
			/>
			<p>Working hours</p>
			<Group>
				<DropdownList
					control={control}
					options={hoursOptions}
					name="workingHours.open"
					width="49%"
					placeholder="Opening"
				/>
				<DropdownList
					control={control}
					options={hoursOptions}
					name="workingHours.close"
					width="49%"
					placeholder="Closes"
				/>
			</Group>
			<p>Areas of expertise</p>
			{specializations.length > 0 && (
				<Tags tags={specializations} mode="edit" deleteTag={deleteLastItem} />
			)}
			<Group>
				<TextInput
					control={control}
					name="specializations"
					type="text"
					width="70%"
				/>
				<Button
					type="button"
					width="29%"
					onClick={addItem}
					color="black"
					background="yellow"
					hoverColor="white"
					hoverBackground="gray"
				>
					add
				</Button>
			</Group>
		</>
	)
}

export default ContactFields
