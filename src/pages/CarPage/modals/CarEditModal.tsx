import { FC } from 'react'

import CarForm from '@/components/Garage/CarForm'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { CarEditModalProps } from '@/types/props/Garage/CarEditModalProps'

const CarEditModal: FC<CarEditModalProps> = ({ car }) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.EDIT_CAR) && (
			<Modal title="Edit car information">
				<CarForm mode="edit" car={car} />
			</Modal>
		)
	)
}

export default CarEditModal
