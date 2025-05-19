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

import { modalNames } from '@/config/modalConfig'
import { routes } from '@/config/routes'

import { ActionContext, ActionDescriptor } from '@/types/types/ActionDescriptor'

export const carAction: ActionDescriptor<ActionContext>[] = [
	{
		key: 'upload-car-photo',
		label: 'Upload photo',
		icon: <MdCloudUpload size={20} />,
		getCallback:
			({ onOpen }) =>
			() =>
				onOpen(modalNames.UPLOAD_CAR_PHOTO),
	},
	{
		key: 'edit-car-information',
		label: 'Edit car information',
		icon: <MdModeEdit size={20} />,
		getCallback:
			({ onOpen }) =>
			() =>
				onOpen(modalNames.EDIT_CAR),
	},
	{
		key: 'select-current-car',
		label: 'Select car as current',
		icon: <BiSolidSelectMultiple size={20} />,
		getCallback:
			({ onOpen }) =>
			() =>
				onOpen(modalNames.SET_CURRENT_CAR),
	},
	{
		key: 'insurance-policy',
		label: 'Insurance policy',
		icon: <IoDocumentText size={20} />,
		getCallback:
			({ navigate, carId, insuranceId = '' }) =>
			() =>
				navigate &&
				navigate(
					`${routes.CAR_INFORMATION}/${carId}${routes.INSURANCE}/${insuranceId}`
				),
	},
	{
		key: 'technical-inspection',
		label: 'Technical inspection',
		icon: <MdMiscellaneousServices size={20} />,
		getCallback:
			({ navigate, carId, inspectionId = '' }) =>
			() =>
				navigate &&
				navigate(
					`${routes.CAR_INFORMATION}/${carId}${routes.INSPECTION}/${inspectionId}`
				),
	},
	{
		key: 'refueling-sessions',
		label: 'Refueling sessions',
		icon: <BsFillFuelPumpFill size={20} />,
		getCallback: () => () => null,
	},
	{
		key: 'repair-and-maintenance',
		label: 'Repair and maintenance',
		icon: <TiSpanner size={20} />,
		getCallback: () => () => null,
	},
	{
		key: 'managing-reminders',
		label: 'Managing Reminders',
		icon: <MdNotifications size={20} />,
		getCallback: () => () => null,
	},
	{
		key: 'services-and-accessories',
		label: 'Services and accessories',
		icon: <RiCarWashingFill size={20} />,
		getCallback: () => () => null,
	},
	{
		key: 'delete-car',
		label: 'Delete car',
		icon: <MdDelete size={20} />,
		getCallback: () => () => null,
	},
]
