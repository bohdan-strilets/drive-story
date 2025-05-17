import { FC } from 'react'

import Gallery from '@/components/Gallery'
import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'
import DecorativeLine from '@/components/UI/DecorativeLine'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { modalNames } from '@/config/modalConfig'

import { insuranceActions } from '@/descriptors/actions/insuranceActions'
import { insuranceField } from '@/descriptors/fields/insuranceField'
import { insurancePayment } from '@/descriptors/fields/insurancePayment'

import { isImage } from '@/types/guards/isImage'
import { InsuranceInfoProps } from '@/types/props/Insurance/InsuranceInfoProps'
import { ActionContext } from '@/types/types/ActionDescriptor'

import Header from '../Header'
import Timer from '../Timer'

import { Container, InformationWrapper, SideMenu } from './InsuranceInfo.styled'

const InsuranceInfo: FC<InsuranceInfoProps> = ({
	insurance,
	imageActions,
	isActionLoading,
}) => {
	const { onOpen } = useModal()
	const { maxMobile } = useResponsive()

	const actionCtx: ActionContext = {
		onOpen,
		modalNames,
	}

	const photos = insurance?.photos

	return (
		insurance && (
			<article>
				<Header
					carId={insurance.carId}
					insuranceId={insurance._id}
					insurerName={insurance.insurerName}
					policyNumber={insurance.policyNumber}
					updatedAt={insurance.updatedAt}
				/>
				<Container>
					<InformationWrapper>
						<Timer
							startDate={insurance.startDate}
							endDate={insurance.endDate}
						/>
						<PropertyList descriptors={insuranceField} context={insurance} />
						{insurance.paymentStatus && !insurance.paymentStatus.isPaid && (
							<>
								<Title
									fontSize={maxMobile ? 20 : 44}
									textAlign={'left'}
									color="black"
									type="h1"
								>
									Payment options
								</Title>
								<PropertyList
									descriptors={insurancePayment}
									context={insurance?.paymentStatus}
								/>
							</>
						)}

						<DecorativeLine type="dashed" />
						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Gallery
						</Title>
						{!photos && (
							<Paragraph color="green" textAlign="center">
								You can upload photos of documents or other important
								information related to this insurance policy so that you always
								have it at hand.
							</Paragraph>
						)}

						{photos && isImage(photos) && (
							<Gallery
								images={photos.resources}
								overlayActions={imageActions}
								isActionLoading={isActionLoading}
								itemsPerPage={maxMobile ? 3 : 6}
								itemHeight="240px"
								isOverlay={true}
							/>
						)}
					</InformationWrapper>
					<SideMenu>
						<Title fontSize={110} textAlign="center" color="yellow">
							{insurance.insuranceType}
						</Title>
						<ActionMenu descriptors={insuranceActions} context={actionCtx} />
					</SideMenu>
				</Container>
			</article>
		)
	)
}

export default InsuranceInfo
