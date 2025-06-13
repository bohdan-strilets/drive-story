import { FC } from 'react'

import Modal from '@/components/Modal'
import Paragraph from '@/components/UI/Paragraph'

import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'
import { useSetCurrentCar } from '@/hooks/user/useSetCurrentCar'

import { modalNames } from '@/config/modalConfig'

import { CurrentCarDto } from '@/types/dto/CurrentCarDto'
import { SelectCarModalProps } from '@/types/props/Garage/SelectCarModalProps'
import { User } from '@/types/types/User'

const SelectCarModal: FC<SelectCarModalProps> = ({ carId }) => {
	const { checkQueryParam, onClose } = useModal()

	const { mutateAsync: setCurrentCar, isPending: isSetCar } = useSetCurrentCar()

	const setCarSubmit = useSubmit<User | null, CurrentCarDto>({
		callback: setCurrentCar,
		isCloseModal: true,
		successMessage: 'The current car has been modified',
	})

	return (
		checkQueryParam(modalNames.SET_CURRENT_CAR) && (
			<Modal
				title="Select this car?"
				isDialog={true}
				isLoading={isSetCar}
				negativeBtnLabel="no"
				positiveBtnLabel="yes"
				negativeCallback={onClose}
				positiveCallback={() => setCarSubmit({ carId })}
			>
				<Paragraph color="black" margin="0 0 15px 0">
					By continuing, you will set this car as your current car that you
					drive and maintain at this time.
				</Paragraph>
			</Modal>
		)
	)
}

export default SelectCarModal
