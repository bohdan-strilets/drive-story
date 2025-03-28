import { FC } from 'react'

import { InputLabelProps } from '@/types/props/UI/InputLabelProps'

import { Label, Required } from './InputLabel.styled'

const InputLabel: FC<InputLabelProps> = ({ label, required }) => {
	return (
		label && (
			<Label>
				{label}
				{required && <Required>*</Required>}
			</Label>
		)
	)
}

export default InputLabel
