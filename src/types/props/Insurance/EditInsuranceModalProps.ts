import { InsuranceModalsProps } from './InsuranceModalsProps'

export type EditInsuranceModalProps = Pick<
	InsuranceModalsProps,
	'carId' | 'insurance'
>
