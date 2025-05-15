import { FC } from 'react'

import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'
import Title from '@/components/UI/Title'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { insuranceActions } from '@/descriptors/actions/insuranceActions'
import { insuranceField } from '@/descriptors/fields/insuranceField'
import { insurancePayment } from '@/descriptors/fields/insurancePayment'

import { InsuranceProps } from '@/types/props/Insurance/InsuranceProps'
import { ActionContext } from '@/types/types/ActionDescriptor'

import Header from '../Header'
import Timer from '../Timer'

import { Container, InformationWrapper, SideMenu } from './Insurance.styled'

const Insurance: FC<InsuranceProps> = ({ insurance }) => {
	const { onOpen, modalNames } = useModal()
	const { maxMobile } = useResponsive()

	const actionCtx: ActionContext = {
		onOpen,
		modalNames,
	}

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

export default Insurance
