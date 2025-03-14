import { useAnimation } from 'motion/react'
import { useCallback } from 'react'
import { FieldValues, useController } from 'react-hook-form'

import { useCheckboxParams } from '@/types/hooks/useCheckboxParams'

import { checkboxScale } from '@/animations/checkboxScale'

export const useCheckbox = <T extends FieldValues>({
	name,
	control,
	rules,
}: useCheckboxParams<T>) => {
	const {
		field: { value, onChange, ref, ...inputProps },
		fieldState: { error },
	} = useController<T>({
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
