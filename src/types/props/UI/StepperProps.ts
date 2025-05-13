export type StepperProps = {
	currentStep: number
	totalSteps: number
}

export type ItemProps = Pick<StepperProps, 'currentStep'> & { index: number }
