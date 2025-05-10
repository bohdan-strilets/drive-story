import { FC } from 'react'
import { RiFunctionAddFill } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'

import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'
import AccentText from '@/components/UI/AccentText'
import BigButton from '@/components/UI/BigButton'
import ButtonGoBack from '@/components/UI/ButtonGoBack'
import DecorativeLine from '@/components/UI/DecorativeLine'
import ErrorMessage from '@/components/UI/ErrorMessage'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import { useFetchInsurance } from '@/hooks/insurance/useFetchInsurance'
import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { routes } from '@/config/routes'

import { insuranceActionsDescriptors } from '@/descriptors/insuranceActionsDescriptors'
import { insuranceFieldDescriptors } from '@/descriptors/insuranceFieldDescriptors'
import { insurancePaymentStatusDescriptors } from '@/descriptors/insurancePaymentStatusDescriptors'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { ActionContext } from '@/types/types/ActionDescriptor'

import { Container, InformationWrapper, SideMenu } from './Insurance.styled'

const Insurance: FC = () => {
	const { onOpen, modalNames } = useModal()
	const { maxMobile } = useResponsive()
	const { carId } = useParams()
	const navigate = useNavigate()

	const { data: insurance, isLoading, isError } = useFetchInsurance(carId ?? '')

	const actionCtx: ActionContext = {
		onOpen,
		modalNames,
	}

	if (isLoading) {
		return <Loader color="gray" />
	}

	if (!insurance && isError) {
		return (
			<>
				<BigButton
					onClick={() => onOpen(modalNames.ADD_INSURANCE_POLICY)}
					icon={<RiFunctionAddFill />}
					label="Add insurance policy"
					height="140px"
					iconSize="80px"
					labelSize="20px"
					margin="0 0 30px 0"
				/>
				<ErrorMessage
					message={
						'You have not yet added insurance policy information for this vehicle. Please use the button above.'
					}
				/>
			</>
		)
	}

	return (
		insurance &&
		!isError && (
			<article>
				<>
					<ButtonGoBack
						label="car"
						onClick={() => navigate(`${routes.CAR_INFORMATION}/${carId}`)}
						margin="0 0 5px 0"
						color="black"
					/>
					<Title
						fontSize={maxMobile ? 20 : 44}
						textAlign={'left'}
						color="black"
						type="h1"
					>
						{insurance?.insurerName}
					</Title>

					<AccentText color="green" fontSize={14} fontWeight="600">
						Policy number: {insurance.policyNumber}
					</AccentText>

					<Paragraph
						color="gray"
						fontSize={12}
						textAlign="right"
						margin="5px 0"
					>
						ID: {insurance._id}
					</Paragraph>
					<Paragraph
						color="gray"
						fontSize={12}
						textAlign="right"
						margin="5px 0"
					>
						Car ID: {insurance.carId}
					</Paragraph>
					<Paragraph color="green" fontSize={12} textAlign="right">
						Latest changes: {parsedDateToString(insurance.updatedAt)}
					</Paragraph>
					<DecorativeLine color="gray" type="dashed" />
				</>
				<Container>
					<InformationWrapper>
						<PropertyList
							descriptors={insuranceFieldDescriptors}
							context={insurance}
						/>
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
									descriptors={insurancePaymentStatusDescriptors}
									context={insurance?.paymentStatus}
								/>
							</>
						)}
					</InformationWrapper>
					<SideMenu>
						<Title fontSize={110} textAlign="center" color="yellow">
							{insurance.insuranceType}
						</Title>
						<ActionMenu
							descriptors={insuranceActionsDescriptors}
							context={actionCtx}
						/>
					</SideMenu>
				</Container>
			</article>
		)
	)
}

export default Insurance
