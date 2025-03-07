import { FieldError, FieldValues } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'

import useCheckbox from '@/hooks/useCheckbox'
import useKeyboard from '@/hooks/useKeyboard'

import { CheckboxProps } from '@/types/props/UI/CheckboxProps'

import {
	Container,
	CustomCheckbox,
	ErrorMsg,
	HiddenInput,
	Wrapper,
} from './Checkbox.styled'

const Checkbox = <T extends FieldValues>({
	children,
	control,
	name,
	rules,
	margin,
}: CheckboxProps<T>) => {
	const {
		toggleCheckbox,
		isChecked,
		inputProps,
		ref,
		onChange,
		disabled,
		error,
		animationControls,
	} = useCheckbox<T>({ name, control, rules })

	const { onEnterDown, onSpaceDown } = useKeyboard()

	const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		onEnterDown(e, toggleCheckbox)
		onSpaceDown(e, toggleCheckbox)
	}

	return (
		<Wrapper
			margin={margin}
			onClick={toggleCheckbox}
			role="checkbox"
			aria-checked={isChecked}
			tabIndex={0}
			onKeyDown={onKeyDown}
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
