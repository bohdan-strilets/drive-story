import { FC } from 'react'
import { RiFunctionAddFill } from 'react-icons/ri'

import useModal from '@/hooks/ui/useModal'

import BigButton from '../UI/BigButton'

import CarCard from './CarCard'

const Garage: FC = () => {
	const { onOpen, modalNames } = useModal()

	return (
		<>
			<BigButton
				onClick={() => onOpen(modalNames.ADD_CAR)}
				icon={<RiFunctionAddFill />}
				label="Add new car"
				height="140px"
				iconSize="80px"
				labelSize="20px"
			/>

			<CarCard />
		</>
	)
}

export default Garage
