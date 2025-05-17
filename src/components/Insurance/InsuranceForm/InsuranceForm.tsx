import { FC, useEffect } from 'react'
import {
	FieldPath,
	FormProvider,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import FormNavigation from '@/components/UI/FormNavigation'
import Loader from '@/components/UI/Loader'
import Stepper from '@/components/UI/Stepper'

import { useCreateInsurance } from '@/hooks/insurance/useCreateInsurance'
import { useUpdateInsurance } from '@/hooks/insurance/useUpdateInsurance'
import useSubmit from '@/hooks/ui/useSubmit'
import { useWizard } from '@/hooks/ui/useWizard'

import { routes } from '@/config/routes'

import { InsuranceDto } from '@/types/dto/InsuranceDto'
import { AddInsuranceParams } from '@/types/params/AddInsuranceParams'
import { UpdateInsuranceParams } from '@/types/params/UpdateInsuranceParams'
import { InsuranceFormProps } from '@/types/props/Insurance/InsuranceFormProps'
import { Insurance } from '@/types/types/Insurance'

import { Fields, Validation } from '@/validation/schemas/InsuranceSchema'

import InsuranceFields from './InsuranceFields'
import PaymentFields from './PaymentFields'

const fieldsByStep: Record<number, FieldPath<Fields>[]> = {
	1: [
		'insurerName',
		'policyNumber',
		'startDate',
		'endDate',
		'insuranceType',
		'coverageAmount',
	],
	2: [
		'paymentStatus.isPaid',
		'paymentStatus.installmentsCount',
		'paymentStatus.installmentCost',
		'paymentStatus.totalInstallmentsSum',
		'paymentStatus.paymentDates',
	],
}

const InsuranceForm: FC<InsuranceFormProps> = ({ mode, insurance }) => {
	const { carId } = useParams()
	const methods = useForm<Fields>(Validation)
	const navigate = useNavigate()

	useEffect(() => {
		if (insurance) methods.reset(insurance)
	}, [insurance, methods])

	const { step, maxStep, isFirst, isLast, next, prev } = useWizard<Fields>(
		fieldsByStep,
		methods.trigger
	)

	const { mutateAsync: updateInsurance, isPending: isUpdating } =
		useUpdateInsurance()
	const { mutateAsync: createInsurance, isPending: isCreating } =
		useCreateInsurance()

	const isLoading = isUpdating || isCreating

	const submitUpdateInsurance = useSubmit<
		Insurance | null,
		UpdateInsuranceParams
	>({
		callback: updateInsurance,
		successMessage: 'The insurance has been successfully updated',
		isCloseModal: true,
	})

	const submitCreateInsurance = useSubmit<Insurance | null, AddInsuranceParams>(
		{
			callback: createInsurance,
			successMessage: 'The insurance has been successfully created',
			isCloseModal: true,
		}
	)

	const onSubmit: SubmitHandler<Fields> = async (data) => {
		const payload: InsuranceDto = {
			insurerName: data.insurerName,
			policyNumber: data.policyNumber,
			insuranceType: data.insuranceType,
			startDate: data.startDate,
			endDate: data.endDate,
			coverageAmount: data.coverageAmount,
			paymentStatus: {
				isPaid: data.paymentStatus?.isPaid ?? false,
				installmentsCount: data.paymentStatus?.installmentsCount,
				installmentCost: data.paymentStatus?.installmentCost,
				totalInstallmentsSum: data.paymentStatus?.totalInstallmentsSum,
			},
		}

		const createInsuranceDto = { payload, carId: carId ?? '' }
		const updateInsuranceDto = {
			payload,
			carId: carId ?? '',
			insuranceId: insurance?._id ?? '',
		}

		const response =
			mode === 'create'
				? await submitCreateInsurance(createInsuranceDto)
				: await submitUpdateInsurance(updateInsuranceDto)

		const insuranceId = response?.data?._id
		navigate(
			`${routes.CAR_INFORMATION}/${carId}/${routes.INSURANCE_POLICY}/${insuranceId}`
		)

		return response
	}

	return (
		<FormProvider {...methods}>
			<Stepper currentStep={step} totalSteps={maxStep} />

			<form onSubmit={methods.handleSubmit(onSubmit)}>
				{step === 1 && <InsuranceFields />}
				{step === 2 && <PaymentFields />}

				{isLoading && <Loader color="gray" margin="15px 0" />}

				<FormNavigation
					isFirst={isFirst}
					isLast={isLast}
					isLoading={isLoading}
					onNext={next}
					onPrev={prev}
					mode={mode}
				/>
			</form>
		</FormProvider>
	)
}

export default InsuranceForm
