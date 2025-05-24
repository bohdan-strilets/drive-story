import { FC } from 'react'
import { FaOilCan } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'
import { MdMiscellaneousServices } from 'react-icons/md'
import { generatePath, useNavigate } from 'react-router-dom'

import useResponsive from '@/hooks/ui/useResponsive'

import { routes } from '@/config/routes'

import { isWithinThreshold } from '@/utils/isWithinThreshold'
import { parsedDateToString } from '@/utils/parsedDateToString'

import { MaintenanceAlertsProps } from '@/types/props/Garage/MaintenanceAlertsProps'

import { fadeIn } from '@/animations/fadeIn'

import { Item, List } from './MaintenanceAlerts.styled'

const MaintenanceAlerts: FC<MaintenanceAlertsProps> = ({
	insurance,
	inspection,
	oilService,
	carId,
}) => {
	const { maxMobile } = useResponsive()
	const navigate = useNavigate()

	const daysToExpiration = 7

	const insuranceWithinThreshold = isWithinThreshold(
		insurance?.insuranceEnds ? new Date(insurance.insuranceEnds) : new Date(),
		daysToExpiration
	)

	const inspectionWithinThreshold = isWithinThreshold(
		inspection?.inspectionEnds
			? new Date(inspection.inspectionEnds)
			: new Date(),
		daysToExpiration
	)

	const oilServiceWithinThreshold = isWithinThreshold(
		oilService?.nextService ? new Date(oilService.nextService) : new Date(),
		daysToExpiration
	)

	const insurancePath = generatePath(routes.INSURANCE_BY_ID, {
		carId: carId,
		insuranceId: insurance?.insuranceId ? insurance.insuranceId : null,
	})

	const inspectionPath = generatePath(routes.INSPECTION_BY_ID, {
		carId: carId,
		inspectionId: inspection?.inspectionId ? inspection.inspectionId : null,
	})

	return (
		<List>
			<Item
				isDatePassed={insuranceWithinThreshold}
				hasEntity={!!insurance}
				onClick={() => navigate(insurancePath)}
				{...fadeIn()}
			>
				<p>Insurance policy</p>
				<IoDocumentText size={maxMobile ? 32 : 54} />
				<p>
					{insurance
						? `Ends: ${parsedDateToString(insurance.insuranceEnds)}`
						: 'Date not specified'}
				</p>
			</Item>

			<Item
				isDatePassed={inspectionWithinThreshold}
				hasEntity={!!inspection}
				onClick={() => navigate(inspectionPath)}
				{...fadeIn()}
			>
				<p>Technical inspection</p>
				<MdMiscellaneousServices size={maxMobile ? 32 : 54} />
				<p>
					{inspection
						? `Ends: ${parsedDateToString(inspection.inspectionEnds)}`
						: 'Date not specified'}
				</p>
			</Item>

			<Item
				isDatePassed={oilServiceWithinThreshold}
				hasEntity={!!oilService}
				{...fadeIn()}
			>
				<p>Oil service</p>
				<FaOilCan size={maxMobile ? 32 : 54} />
				<p>
					{oilService
						? `Ends: ${parsedDateToString(oilService.nextService)}`
						: 'Date not specified'}
				</p>
			</Item>
		</List>
	)
}

export default MaintenanceAlerts
