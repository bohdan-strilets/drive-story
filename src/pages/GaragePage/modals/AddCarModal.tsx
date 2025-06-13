import { FC } from 'react'

import CarForm from '@/components/Garage/CarForm'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const AddCarModal: FC = () => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.ADD_CAR) && (
			<Modal title="Add new car">
				<CarForm mode="create" />
			</Modal>
		)
	)
}

export default AddCarModal
