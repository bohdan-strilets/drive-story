import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import { contactRules } from '@/validation/rules/contactRules'
import { Fields } from '@/validation/schemas/ContactSchema'

const AddressFields: FC = () => {
	const { control } = useFormContext<Fields>()

	return (
		<>
			<Title fontSize={24} textAlign="left" color="black">
				Address information
			</Title>
			<TextInput
				control={control}
				label="Country"
				name="address.country"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					minLength: contactRules.address.country.min,
					maxLength: contactRules.address.country.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="City"
				name="address.city"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					minLength: contactRules.address.city.min,
					maxLength: contactRules.address.city.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="Street"
				name="address.street"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					minLength: contactRules.address.street.min,
					maxLength: contactRules.address.street.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="House number"
				name="address.houseNumber"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					minLength: contactRules.address.houseNumber.min,
					maxLength: contactRules.address.houseNumber.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="Postal code"
				name="address.postalCode"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				mask="00-000"
				unmask={false}
			/>
		</>
	)
}

export default AddressFields
