import { useCallback } from 'react'
import { FieldValues, useController } from 'react-hook-form'

import { SwitchProps } from '@/types/props/UI/SwitchProps'

import InputErrorMessage from '../InputErrorMessage'
import InputLabel from '../InputLabel'

import { SwitchRole, Thumb, Track, Wrapper } from './Switch.styled'

const Switch = <T extends FieldValues>({
	control,
	name,
	label,
	rules,
	defaultValue,
	margin,
}: SwitchProps<T>) => {
	const {
		field: { value, onChange, onBlur },
		fieldState: { error },
	} = useController({
		name,
		control,
		rules,
		defaultValue,
	})

	const handleToggle = useCallback(() => {
		onChange(!value)
	}, [onChange, value])

	return (
		<Wrapper margin={margin}>
			{label && <InputLabel label={label} required={!!rules?.required} />}
			<SwitchRole
				role="switch"
				aria-checked={value}
				tabIndex={0}
				onClick={handleToggle}
				onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
				onBlur={onBlur}
			>
				<Track checked={value} className="track">
					<Thumb checked={value} />
				</Track>
			</SwitchRole>
			<InputErrorMessage error={error} />
		</Wrapper>
	)
}

export default Switch
