import { FC, useEffect, useState } from 'react'
import {
	FieldPath,
	FormProvider,
	SubmitHandler,
	useForm,
} from 'react-hook-form'

import FormNavigation from '@/components/UI/FormNavigation'
import Loader from '@/components/UI/Loader'
import Stepper from '@/components/UI/Stepper'

import { useCreateContact } from '@/hooks/contact/useCreateContact'
import { useUpdateContact } from '@/hooks/contact/useUpdateContact'
import useSubmit from '@/hooks/ui/useSubmit'
import { useWizard } from '@/hooks/ui/useWizard'

import { ContactDto } from '@/types/dto/ContactDto'
import { UpdateContactParams } from '@/types/params/UpdateContactParams'
import { ContactFormProps } from '@/types/props/PhoneBook/ContactFormProps'
import { Contact } from '@/types/types/Contact'

import { Fields, Schema, Validation } from '@/validation/schemas/ContactSchema'

import AddressFields from './AddressFields'
import ContactFields from './ContactFields'

const fieldsByStep: Record<number, FieldPath<Fields>[]> = {
	1: [
		'name',
		'phone',
		'email',
		'mapLink',
		'website',
		'workingHours',
		'specializations',
	],
	2: [
		'address.street',
		'address.houseNumber',
		'address.city',
		'address.country',
		'address.postalCode',
	],
}

const ContactForm: FC<ContactFormProps> = ({ mode, contact }) => {
	const [specializations, setSpecializations] = useState<string[]>([])

	const methods = useForm<Fields>(Validation)

	useEffect(() => {
		if (contact) {
			const params = { stripUnknown: true }
			const open = contact.workingHours?.[0]
			const close = contact.workingHours?.[1]

			const initialValues = Schema.cast(
				{
					...contact,
					specializations: null,
					workingHours: { open, close },
				},
				params
			) as Fields

			methods.reset(initialValues)
		}
	}, [contact, methods])

	const { step, maxStep, isFirst, isLast, next, prev } = useWizard<Fields>(
		fieldsByStep,
		methods.trigger
	)

	const { mutateAsync: updateContact, isPending: isUpdating } =
		useUpdateContact()
	const { mutateAsync: createContact, isPending: isCreating } =
		useCreateContact()

	const isLoading = isUpdating || isCreating

	const submitUpdateContact = useSubmit<Contact | null, UpdateContactParams>({
		callback: updateContact,
		successMessage: 'The contact has been successfully updated',
		isCloseModal: true,
	})

	const submitCreateContact = useSubmit<Contact | null, ContactDto>({
		callback: createContact,
		successMessage: 'The contact has been successfully created',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<Fields> = (data) => {
		const payload: ContactDto = {
			...data,
			workingHours:
				data.workingHours && data.workingHours.open && data.workingHours.close
					? [data.workingHours.open, data.workingHours.close]
					: null,
			specializations,
		}

		if (mode === 'create') {
			return submitCreateContact(payload)
		}

		const updateCarParams: UpdateContactParams = {
			payload,
			contactId: contact?._id,
		}

		return submitUpdateContact(updateCarParams)
	}

	const getSpecializations = (value: string[]): void => {
		setSpecializations(value)
	}

	return (
		<FormProvider {...methods}>
			<Stepper currentStep={step} totalSteps={maxStep} />

			<form onSubmit={methods.handleSubmit(onSubmit)}>
				{step === 1 && (
					<ContactFields
						getSpecializations={getSpecializations}
						initialSpecialization={contact?.specializations}
					/>
				)}
				{step === 2 && <AddressFields />}

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

export default ContactForm
