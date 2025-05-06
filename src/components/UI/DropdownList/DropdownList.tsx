import { useCallback, useMemo, useState } from 'react'
import { FieldValues, useController } from 'react-hook-form'
import { ImCheckmark } from 'react-icons/im'

import useClickOutside from '@/hooks/ui/useClickOutside'

import { DropdownListProps } from '@/types/props/UI/DropdownListProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { getColor } from '@/styles/helpers/getColor'

import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'

import {
	ArrowIcon,
	Button,
	CustomInput,
	Item,
	List,
	Wrapper,
} from './DropdownList.styled'

const DropdownList = <T extends FieldValues>({
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
}: DropdownListProps<T>) => {
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

	const toggleList = useCallback(() => setIsOpen((state) => !state), [])
	const closeList = useCallback(() => setIsOpen(false), [])

	const ref = useClickOutside<HTMLDivElement>(closeList)
	const required = rules?.required

	const handleSelectOption = (optionValue: string): void => {
		onChange(value === optionValue ? null : optionValue)
		toggleList()
	}

	const displaySelectedLabel = useMemo((): string => {
		const option = options.find((item) => item.value === value)
		return option ? option.label : placeholder
	}, [options, placeholder, value])

	return (
		<Wrapper width={width} margin={margin} ref={ref}>
			<InputLabel label={label} required={required} />
			<CustomInput
				type="button"
				onClick={toggleList}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
			>
				{displaySelectedLabel}
				<ArrowIcon isOpen={isOpen} />
			</CustomInput>
			{isOpen && (
				<List listHeight={listHeight} listPosition={listPosition}>
					{options.map((item, index) => (
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
					))}
				</List>
			)}

			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default DropdownList
