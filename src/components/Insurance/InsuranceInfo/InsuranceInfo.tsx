import { useEffect, useRef } from 'react'

import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'
import ContactWidget from '@/components/PhoneBook/ContactWidget'
import DecorativeLine from '@/components/UI/DecorativeLine'
import Title from '@/components/UI/Title'

import { useUpdatePaidStatus } from '@/hooks/insurance/useUpdatePaidStatus'
import { useGeneratePayments } from '@/hooks/ui/useGeneratePayments'
import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { getInsuranceActions } from '@/descriptors/actions/getInsuranceActions'
import { insuranceField } from '@/descriptors/fields/insuranceField'
import { insurancePayment } from '@/descriptors/fields/insurancePayment'

import { PaidStatusDto } from '@/types/dto/PaidStatusDto'
import { isContact } from '@/types/guards/isContact'
import { UpdateParams } from '@/types/params/UpdateParams'
import { InsuranceInfoProps } from '@/types/props/Insurance/InsuranceInfoProps'

import Header from '../Header'
import ImageGallery from '../ImageGallery'
import PaymentProgressBar from '../PaymentProgressBar'
import Timer from '../Timer'

import { Container, InformationWrapper, SideMenu } from './InsuranceInfo.styled'

const InsuranceInfo = <T,>({
	insurance,
	imageActions,
	isActionLoading,
	isBinding,
	bindContact,
}: InsuranceInfoProps<T>) => {
	const { onOpen } = useModal()
	const { maxMobile } = useResponsive()

	const photos = insurance?.photos
	const actions = getInsuranceActions({ onOpen })
	const contact = isContact(insurance.contactId)
		? insurance.contactId
		: undefined

	const payments = useGeneratePayments({
		startDate: new Date(insurance.startDate),
		endDate: new Date(insurance.endDate),
		isPaid: insurance.paymentStatus!.isPaid,
		installmentsCount: insurance.paymentStatus?.installmentsCount,
		totalInstallmentsSum: insurance.paymentStatus?.totalInstallmentsSum,
	})

	const { mutateAsync: updatePaidStatus } = useUpdatePaidStatus()
	const hasCalledRef = useRef(false)

	useEffect(() => {
		const allPaid = payments.length > 0 && payments.every((p) => p.isPaid)

		const params: UpdateParams<PaidStatusDto> = {
			payload: { isPaid: true },
			entityId: insurance._id,
		}

		if (!insurance.paymentStatus.isPaid && allPaid && !hasCalledRef.current) {
			hasCalledRef.current = true
			updatePaidStatus(params)
		}
	}, [
		insurance._id,
		insurance.carId,
		insurance.paymentStatus.isPaid,
		payments,
		updatePaidStatus,
	])

	return (
		<article>
			<Header
				carId={insurance.carId}
				insuranceId={insurance._id}
				insurerName={insurance.insurerName}
				policyNumber={insurance.policyNumber}
				updatedAt={insurance.updatedAt}
			/>

			<ImageGallery
				photos={photos}
				imageActions={imageActions}
				isActionLoading={isActionLoading}
			/>

			<Container>
				<InformationWrapper>
					<Timer startDate={insurance.startDate} endDate={insurance.endDate} />
					<PaymentProgressBar payments={payments} />
					<DecorativeLine color="gray" type="dashed" />

					<PropertyList descriptors={insuranceField} context={insurance} />
					{insurance.paymentStatus && (
						<>
							<Title
								fontSize={maxMobile ? 20 : 28}
								textAlign={'left'}
								color="black"
								type="h1"
							>
								Payment options
							</Title>
							<PropertyList
								descriptors={insurancePayment}
								context={insurance.paymentStatus}
							/>
						</>
					)}
				</InformationWrapper>
				<SideMenu>
					<Title fontSize={110} textAlign="center" color="yellow">
						{insurance.insuranceType}
					</Title>
					<ActionMenu descriptors={actions} />
					<ContactWidget<T>
						bindContact={bindContact}
						isBinding={isBinding}
						contact={contact}
						margin="15px 0 0 0"
					/>
				</SideMenu>
			</Container>
		</article>
	)
}

export default InsuranceInfo
