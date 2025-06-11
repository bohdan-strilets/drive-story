import { BiSolidSelectMultiple } from 'react-icons/bi'
import { BsFillFuelPumpFill } from 'react-icons/bs'
import { IoDocumentText } from 'react-icons/io5'
import {
	MdCloudUpload,
	MdDelete,
	MdMiscellaneousServices,
	MdModeEdit,
	MdNotifications,
} from 'react-icons/md'
import { RiCarWashingFill } from 'react-icons/ri'
import { TiSpanner } from 'react-icons/ti'
import { generatePath } from 'react-router-dom'

import { modalNames } from '@/config/modalConfig'
import { routes } from '@/config/routes'

import { ActionDescriptor, ActionParams } from '@/types/types/ActionDescriptor'

export const getCarActions = ({
	onOpen,
	navigate,
	carId = null,
	insuranceId = null,
	inspectionId = null,
}: ActionParams): ActionDescriptor[] => {
	return [
		{
			key: 'upload-car-photo',
			label: 'Upload photo',
			icon: <MdCloudUpload size={20} />,
			callback: () => onOpen(modalNames.UPLOAD_CAR_PHOTO),
		},
		{
			key: 'edit-car-information',
			label: 'Edit car information',
			icon: <MdModeEdit size={20} />,
			callback: () => onOpen(modalNames.EDIT_CAR),
		},
		{
			key: 'select-current-car',
			label: 'Select car as current',
			icon: <BiSolidSelectMultiple size={20} />,
			callback: () => onOpen(modalNames.SET_CURRENT_CAR),
		},
		{
			key: 'insurance-policy',
			label: 'Insurance policy',
			icon: <IoDocumentText size={20} />,
			callback: () => {
				if (navigate) {
					const path = generatePath(routes.INSURANCE_BY_ID, {
						carId: carId,
						insuranceId: insuranceId,
					})
					navigate(path)
				}
			},
		},
		{
			key: 'technical-inspection',
			label: 'Technical inspection',
			icon: <MdMiscellaneousServices size={20} />,
			callback: () => {
				if (navigate) {
					const path = generatePath(routes.INSPECTION_BY_ID, {
						carId: carId,
						inspectionId: inspectionId,
					})
					navigate(path)
				}
			},
		},
		{
			key: 'refueling-sessions',
			label: 'Refueling sessions',
			icon: <BsFillFuelPumpFill size={20} />,
			callback: () => {
				if (navigate) {
					const path = generatePath(routes.REFUELING_BY_CAR, { carId: carId })
					navigate(path)
				}
			},
		},
		{
			key: 'repair-and-maintenance',
			label: 'Repair and maintenance',
			icon: <TiSpanner size={20} />,
			callback: () => () => null,
		},
		{
			key: 'managing-reminders',
			label: 'Managing Reminders',
			icon: <MdNotifications size={20} />,
			callback: () => () => null,
		},
		{
			key: 'services-and-accessories',
			label: 'Services and accessories',
			icon: <RiCarWashingFill size={20} />,
			callback: () => () => null,
		},
		{
			key: 'delete-car',
			label: 'Delete car',
			icon: <MdDelete size={20} />,
			callback: () => () => null,
		},
	]
}
