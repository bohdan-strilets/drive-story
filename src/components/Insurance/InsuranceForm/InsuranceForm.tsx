import { FC, useEffect } from 'react'
import {
	FieldPath,
	FormProvider,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import { generatePath, useNavigate } from 'react-router-dom'

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

const InsuranceForm: FC<InsuranceFormProps> = ({ mode, carId, insurance }) => {
	const navigate = useNavigate()
	const methods = useForm<Fields>(Validation)

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
		const payload: InsuranceDto = data

		if (mode === 'create') {
			const addInsuranceParams: AddInsuranceParams = { payload: data, carId }
			const response = await submitCreateInsurance(addInsuranceParams)

			const path = generatePath(routes.INSURANCE_BY_ID, {
				carId,
				insuranceId: response?.data?._id || null,
			})

			return navigate(path)
		}

		const updateInsuranceParams: UpdateInsuranceParams = {
			payload,
			carId,
			insuranceId: insurance!._id,
		}

		return await submitUpdateInsurance(updateInsuranceParams)
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
