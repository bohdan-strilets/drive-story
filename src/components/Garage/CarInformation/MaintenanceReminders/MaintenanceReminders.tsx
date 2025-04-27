import { FC } from 'react'
import { FaOilCan } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'
import { MdMiscellaneousServices } from 'react-icons/md'

import useResponsive from '@/hooks/ui/useResponsive'

import { isWithinThreshold } from '@/utils/isWithinThreshold'

import { fadeIn } from '@/animations/fadeIn'

import { Item, List } from './MaintenanceReminders.styled'

const MaintenanceReminders: FC = () => {
	const { maxMobile } = useResponsive()

	return (
		<List>
			<Item
				isDatePassed={isWithinThreshold(new Date('2025.05.03'), 7)}
				{...fadeIn()}
			>
				<p>Insurance policy</p>
				<IoDocumentText size={maxMobile ? 32 : 54} />
				<p>Ends: 2026.05.02</p>
			</Item>
			<Item
				isDatePassed={isWithinThreshold(new Date('2026.03.25'), 7)}
				{...fadeIn()}
			>
				<p>Technical inspection</p>
				<MdMiscellaneousServices size={maxMobile ? 32 : 54} />
				<p>Ends: 2026.03.25</p>
			</Item>
			<Item
				isDatePassed={isWithinThreshold(new Date('2026.03.15'), 7)}
				{...fadeIn()}
			>
				<p>Oil service</p>
				<FaOilCan size={maxMobile ? 32 : 54} />
				<p>Made: 2026.03.15</p>
			</Item>
		</List>
	)
}

export default MaintenanceReminders
