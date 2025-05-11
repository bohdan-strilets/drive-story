import { FC } from 'react'
import { useParams } from 'react-router-dom'

import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'
import Loader from '@/components/UI/Loader'
import Title from '@/components/UI/Title'

import { useFetchInsurance } from '@/hooks/insurance/useFetchInsurance'
import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { insuranceActions } from '@/descriptors/actions/insuranceActions'
import { insuranceField } from '@/descriptors/fields/insuranceField'
import { insurancePayment } from '@/descriptors/fields/insurancePayment'

import { ActionContext } from '@/types/types/ActionDescriptor'

import Error from '../Error'
import Header from '../Header'
import Timer from '../Timer'

import { Container, InformationWrapper, SideMenu } from './Insurance.styled'

const Insurance: FC = () => {
	const { onOpen, modalNames } = useModal()
	const { maxMobile } = useResponsive()
	const { carId } = useParams()

	const { data: insurance, isLoading, isError } = useFetchInsurance(carId ?? '')

	const actionCtx: ActionContext = {
		onOpen,
		modalNames,
	}

	if (isLoading) {
		return <Loader color="gray" />
	}

	if (!insurance && isError) {
		return <Error />
	}

	return (
		insurance &&
		!isError && (
			<article>
				<Header
					carId={carId ?? ''}
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
