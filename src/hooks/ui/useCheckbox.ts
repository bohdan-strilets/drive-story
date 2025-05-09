import { useAnimation } from 'motion/react'
import { useCallback } from 'react'
import { FieldValues, Path, useController } from 'react-hook-form'

import { Params } from '@/types/hooks/useCheckboxParams'

import { checkboxScale } from '@/animations/checkboxScale'

export const useCheckbox = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>({
	name,
	control,
	rules,
}: Params<TFieldValues, TName>) => {
	const {
		field: { value, onChange, ref, ...inputProps },
		fieldState: { error },
	} = useController<TFieldValues, TName>({
		name,
		control,
		rules,
		defaultValue: rules?.isChecked,
	})

	const animationControls = useAnimation()
	const disabled = rules?.disabled
	const isChecked = Boolean(value)

	const toggleCheckbox = useCallback(() => {
		if (!disabled) {
			const newCheckedState = !isChecked
			onChange(newCheckedState)
			animationControls.start(checkboxScale)
		}
	}, [disabled, isChecked, onChange, animationControls])

	return {
		toggleCheckbox,
		isChecked,
		inputProps,
		ref,
		onChange,
		disabled,
		error,
		animationControls,
	}
}

export default useCheckbox
