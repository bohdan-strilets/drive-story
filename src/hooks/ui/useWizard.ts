import { useCallback, useState } from 'react'
import { FieldPath, FieldValues, UseFormTrigger } from 'react-hook-form'

type FieldsByStep<T extends FieldValues> = Record<number, FieldPath<T>[]>

export const useWizard = <T extends FieldValues>(
	fieldsByStep: FieldsByStep<T>,
	trigger: UseFormTrigger<T>
) => {
	const [step, setStep] = useState(1)
	const maxStep = Object.keys(fieldsByStep).length

	const next = useCallback(
		async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault()
			const valid = await trigger(fieldsByStep[step])
			if (valid && step < maxStep) {
				setStep((state) => state + 1)
			}
		},
		[step, maxStep, trigger, fieldsByStep]
	)

	const prev = useCallback(() => {
		setStep((state) => Math.max(1, state - 1))
	}, [])

	return {
		step,
		maxStep,
		isFirst: step === 1,
		isLast: step === maxStep,
		next,
		prev,
	}
}
