import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import { userRules } from '@/validation/rules/userRules'
import { Fields } from '@/validation/schemas/ProfileShema'

const LocationFields: FC = () => {
	const { control } = useFormContext<Fields>()

	return (
		<>
			<Title fontSize={24} textAlign="left" color="black">
				Location
			</Title>
			<TextInput
				control={control}
				label="Country"
				name="location.country"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: userRules.location.country.min,
					maxLength: userRules.location.country.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="City"
				name="location.city"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: userRules.location.city.min,
					maxLength: userRules.location.city.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="Postal code"
				name="location.postalCode"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				mask="00-000"
				unmask={false}
			/>
		</>
	)
}

export default LocationFields
