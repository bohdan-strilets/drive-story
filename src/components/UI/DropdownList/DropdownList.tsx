import {
	ChangeEvent,
	KeyboardEvent,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { FieldValues, Path, useController } from 'react-hook-form'
import { ImCheckmark } from 'react-icons/im'

import useClickOutside from '@/hooks/ui/useClickOutside'
import { useDebounce } from '@/hooks/ui/useDebounce'

import { formatLabel } from '@/utils/generateDropdownOptions'

import { DropdownListProps } from '@/types/props/UI/DropdownListProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { getColor } from '@/styles/helpers/getColor'

import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'
import Loader from '../Loader'

import {
	ArrowIcon,
	Button,
	CustomInput,
	EmptyList,
	InputContainer,
	Item,
	List,
	Wrapper,
} from './DropdownList.styled'

const DropdownList = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>({
	control,
	options,
	name,
	label,
	placeholder,
	rules,
	defaultValue,
	width = '100%',
	margin,
	listHeight = 300,
	listPosition = 'bottom',
	isLoading = false,
}: DropdownListProps<TFieldValues, TName>) => {
	const {
		field: { onChange, value },
		fieldState: { error },
	} = useController({
		name,
		control,
		rules,
		defaultValue,
	})

	const [isOpen, setIsOpen] = useState(false)
	const [filterValue, setFilterValue] = useState<null | string>(null)
	const [filteredOptions, setFilteredOptions] = useState(options)

	const defaultLabel = useCallback(() => {
		const option = options.find((item) => item.value === value)
		setFilterValue(option ? option.value : '')
	}, [options, value])

	useEffect(() => {
		defaultLabel()
	}, [defaultLabel])

	const toggleList = useCallback(() => {
		setIsOpen((state) => {
			const newState = !state
			if (newState) {
				defaultLabel()
			}
			return newState
		})
	}, [defaultLabel])

	const closeList = useCallback(() => setIsOpen(false), [])

	const ref = useClickOutside<HTMLDivElement>(closeList)
	const required = rules?.required

	const handleSelectOption = (optionValue: string): void => {
		onChange(value === optionValue ? null : optionValue)
		setFilterValue(value === optionValue ? null : optionValue)
		closeList()
	}

	const debouncedQuery = useDebounce<string>(filterValue ?? '', 500)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim().toLowerCase()
		setFilterValue(value)
	}

	useEffect(() => {
		const filteredOptions = options.filter((item) =>
			item.value.toLowerCase().includes(debouncedQuery.toLowerCase())
		)

		setFilteredOptions(filteredOptions)
	}, [debouncedQuery, options])

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === ' ') {
			e.preventDefault()
			setIsOpen(true)
		}
	}

	return (
		<Wrapper width={width} margin={margin} ref={ref}>
			<InputLabel label={label} required={required} />
			<InputContainer>
				<CustomInput
					type="text"
					name="listbox"
					onClick={toggleList}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					value={formatLabel(filterValue ?? '')}
					placeholder={placeholder}
					aria-haspopup="listbox"
					aria-expanded={isOpen}
					autoComplete="off"
				/>
				<ArrowIcon isOpen={isOpen} />
			</InputContainer>

			{isOpen && (
				<List listHeight={listHeight} listPosition={listPosition}>
					{filteredOptions.length !== 0 ? (
						filteredOptions.map((item, index) => (
							<Item key={item.id} {...fadeSlide(0, -20, index * 0.03, 0.1)}>
								<Button
									type="button"
									data-value={item.value}
									onClick={() => handleSelectOption(item.value)}
								>
									{item.label}
									{item.value === value && (
										<ImCheckmark color={getColor('black')} />
									)}
								</Button>
							</Item>
						))
					) : (
						<>
							<EmptyList>No matches found...</EmptyList>
							{isLoading && <Loader color="gray" />}
						</>
					)}
				</List>
			)}

			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default DropdownList
