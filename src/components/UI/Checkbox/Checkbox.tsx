import { FieldError, FieldValues, Path } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'

import useCheckbox from '@/hooks/ui/useCheckbox'
import useKeyboard from '@/hooks/ui/useKeyboard'

import { CheckboxProps } from '@/types/props/UI/CheckboxProps'

import {
	Container,
	CustomCheckbox,
	ErrorMsg,
	HiddenInput,
	Wrapper,
} from './Checkbox.styled'

const Checkbox = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>({
	children,
	control,
	name,
	rules,
	margin,
}: CheckboxProps<TFieldValues, TName>) => {
	const {
		toggleCheckbox,
		isChecked,
		inputProps,
		ref,
		onChange,
		disabled,
		error,
		animationControls,
	} = useCheckbox<TFieldValues, TName>({ name, control, rules })

	useKeyboard({
		Space: toggleCheckbox,
		Enter: toggleCheckbox,
	})

	return (
		<Wrapper
			margin={margin}
			onClick={toggleCheckbox}
			role="checkbox"
			aria-checked={isChecked}
			tabIndex={0}
		>
			<Container>
				<HiddenInput
					{...inputProps}
					ref={ref}
					type="checkbox"
					checked={isChecked}
					onChange={onChange}
				/>
				<CustomCheckbox
					animate={animationControls}
					isChecked={isChecked}
					disabled={disabled}
					className="checkbox"
				>
					{isChecked && <HiCheck size={20} />}
				</CustomCheckbox>
				{children}
			</Container>
			{error && <ErrorMsg>{(error as FieldError).message}</ErrorMsg>}
		</Wrapper>
	)
}

export default Checkbox
