import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import Paragraph from '@/components/UI/Paragraph'
import TextInput from '@/components/UI/TextInput'

import { useDebounce } from '@/hooks/ui/useDebounce'

import { ContactsFilterProps } from '@/types/props/PhoneBook/ContactsFilterProps'

import { Fields, Validation } from '@/validation/schemas/ContactFilterSchema'

import { Wrapper } from './ContactsFilter.styled'

const ContactsFilter: FC<ContactsFilterProps> = ({ getQuery }) => {
	const [query, setQuery] = useState<string>('')

	const debouncedQuery = useDebounce<string>(query, 500)

	const { control } = useForm<Fields>(Validation)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	useEffect(() => {
		getQuery(debouncedQuery)
	}, [debouncedQuery, getQuery])

	return (
		<Wrapper>
			<Paragraph color="black" fontWeight={700}>
				Search contacts by name or phone
			</Paragraph>
			<form>
				<TextInput
					control={control}
					name="searchQuery"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					onChange={handleChange}
				/>
			</form>
		</Wrapper>
	)
}

export default ContactsFilter
