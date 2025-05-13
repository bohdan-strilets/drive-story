import { FC } from 'react'

import { StepperProps } from '@/types/props/UI/StepperProps'

import { Item, List } from './Stepper.styled'

const Stepper: FC<StepperProps> = ({ currentStep, totalSteps }) => {
	return (
		<List>
			{Array.from({ length: totalSteps }, (_, idx) => {
				const index = idx + 1
				return (
					<Item key={index} currentStep={currentStep} index={index}>
						<p>{index}</p>
					</Item>
				)
			})}
		</List>
	)
}

export default Stepper
