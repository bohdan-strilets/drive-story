import { FC } from 'react'
import { RiFunctionAddFill } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'

import BigButton from '@/components/UI/BigButton'
import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'

import useModal from '@/hooks/ui/useModal'

import { routes } from '@/config/routes'

const ErrorState: FC = () => {
	const { onOpen, modalNames } = useModal()
	const navigate = useNavigate()
	const { carId } = useParams()

	return (
		<>
			<ButtonGoBack
				label="car"
				onClick={() => navigate(`${routes.CAR_INFORMATION}/${carId}`)}
				margin="0 0 5px 0"
				color="black"
			/>
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

export default ErrorState
