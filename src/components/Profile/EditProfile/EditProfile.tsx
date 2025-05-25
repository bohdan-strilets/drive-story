import { FC, useEffect } from 'react'
import {
	FieldPath,
	FormProvider,
	SubmitHandler,
	useForm,
} from 'react-hook-form'

import FormNavigation from '@/components/UI/FormNavigation'
import Loader from '@/components/UI/Loader'
import Stepper from '@/components/UI/Stepper'

import useSubmit from '@/hooks/ui/useSubmit'
import { useWizard } from '@/hooks/ui/useWizard'
import { useEditProfile } from '@/hooks/user/useEditProfile'

import { ProfileDto } from '@/types/dto/ProfileDto'
import { EditProfileProps } from '@/types/props/Profile/EditProfileProps'
import { User } from '@/types/types/User'

import { Fields, Schema, Validation } from '@/validation/schemas/ProfileShema'

import LocationFields from './LocationFields'
import UserInfoFields from './UserInfoFields'

const fieldsByStep: Record<number, FieldPath<Fields>[]> = {
	1: [
		'firstName',
		'lastName',
		'nickname',
		'birthDate',
		'phoneNumber',
		'gender',
		'location',
	],
	2: ['location.country', 'location.city', 'location.postalCode'],
}

const EditProfile: FC<EditProfileProps> = ({ user }) => {
	const methods = useForm<Fields>(Validation)

	useEffect(() => {
		if (user) {
			const params = { stripUnknown: true }
			const initialValues = Schema.cast(user, params) as Fields
			methods.reset(initialValues)
		}
	}, [methods, user])

	const { step, maxStep, isFirst, isLast, next, prev } = useWizard<Fields>(
		fieldsByStep,
		methods.trigger
	)

	const { mutateAsync: editProfile, isPending } = useEditProfile()

	const submitEditProfile = useSubmit<User | null, ProfileDto>({
		callback: editProfile,
		successMessage: 'Profile successfully changed',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<Fields> = async (data) => {
		const payload: ProfileDto = data
		submitEditProfile(payload)
	}

	return (
		<FormProvider {...methods}>
			<Stepper currentStep={step} totalSteps={maxStep} />

			<form onSubmit={methods.handleSubmit(onSubmit)}>
				{step === 1 && <UserInfoFields />}
				{step === 2 && <LocationFields />}

				{isPending && <Loader color="gray" margin="15px 0" />}

				<FormNavigation
					isFirst={isFirst}
					isLast={isLast}
					isLoading={isPending}
					onNext={next}
					onPrev={prev}
					mode="edit"
				/>
			</form>
		</FormProvider>
	)
}

export default EditProfile
