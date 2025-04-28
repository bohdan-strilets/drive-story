import { nanoid } from 'nanoid'
import { useMemo } from 'react'
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

import { convertEngineVolume } from '@/utils/convertEngineVolume'
import { defaultImages } from '@/utils/defaultImages'
import { formatMileage } from '@/utils/formatMileage'
import { formatLabel } from '@/utils/generateDropdownOptions'
import { parsedDateToString } from '@/utils/parsedDateToString'

import { Action } from '@/types/props/Layout/ActionMenuProps'
import { PropertyListItem } from '@/types/props/Layout/PropertyListProps'

import { useGetByIdCar } from '../car/useGetByIdCar'

import { useGetImage } from './useGetImage'
import useModal from './useModal'

export const useCarInformation = (carId: string) => {
	const { data: car, isLoading, isError } = useGetByIdCar(carId)
	const { onOpen, modalNames } = useModal()

	const basicInfo = car?.basicInfo
	const specifications = car?.specifications
	const engine = car?.specifications.engine
	const registration = car?.registration
	const ownership = car?.ownership

	const carPoster = useGetImage({
		image: car?.photos,
		defaultImage: defaultImages.poster,
	})

	const carName = `${basicInfo?.make} ${basicInfo?.model}`
	const shortName = basicInfo?.shortName
	const updatedDate = car?.updatedAt
	const description = car?.description
	const photos = car?.photos

	const basicInfoList: PropertyListItem[] = useMemo(
		() => [
			{
				id: nanoid(),
				property: 'Make',
				value: basicInfo?.make,
			},
			{
				id: nanoid(),
				property: 'Model',
				value: basicInfo?.model,
			},
			{
				id: nanoid(),
				property: 'Year',
				value: basicInfo?.year,
			},
			{
				id: nanoid(),
				property: 'Short name',
				value: basicInfo?.shortName,
			},
			{
				id: nanoid(),
				property: 'Generation',
				value: basicInfo?.generation,
			},
		],
		[
			basicInfo?.generation,
			basicInfo?.make,
			basicInfo?.model,
			basicInfo?.shortName,
			basicInfo?.year,
		]
	)

	const specificationsList: PropertyListItem[] = useMemo(
		() => [
			{
				id: nanoid(),
				property: 'Mileage',
				value: `${formatMileage(specifications?.mileage || 0)} km`,
			},
			{
				id: nanoid(),
				property: 'Fuel type',
				value: formatLabel(specifications?.fuelType || '---'),
			},
			{
				id: nanoid(),
				property: 'Transmission',
				value: formatLabel(specifications?.transmission || '---'),
			},
			{
				id: nanoid(),
				property: 'Drivetrain',
				value: formatLabel(specifications?.drivetrain || '---'),
			},
			{
				id: nanoid(),
				property: 'Body type',
				value: formatLabel(specifications?.bodyType || '---'),
			},
			{
				id: nanoid(),
				property: 'Engine volume',
				value: `${convertEngineVolume(engine?.volume || 0)} L`,
			},
			{
				id: nanoid(),
				property: 'Engine power',
				value: `${engine?.power} KM`,
			},
			{
				id: nanoid(),
				property: 'Number of doors',
				value: specifications?.doors || 0,
			},
			{
				id: nanoid(),
				property: 'Number of seats',
				value: specifications?.seats || 0,
			},
		],
		[
			engine?.power,
			engine?.volume,
			specifications?.bodyType,
			specifications?.doors,
			specifications?.drivetrain,
			specifications?.fuelType,
			specifications?.mileage,
			specifications?.seats,
			specifications?.transmission,
		]
	)

	const registrationList: PropertyListItem[] = useMemo(
		() => [
			{
				id: nanoid(),
				property: 'Vin number',
				value: registration?.vin || '---',
			},
			{
				id: nanoid(),
				property: 'Registration number',
				value: registration?.regNumber || '---',
			},
			{
				id: nanoid(),
				property: 'Date of first registration',
				value: parsedDateToString(registration?.firstRegDate),
			},
		],
		[registration?.firstRegDate, registration?.regNumber, registration?.vin]
	)

	const ownershipList: PropertyListItem[] = useMemo(
		() => [
			{
				id: nanoid(),
				property: 'Date of purchase',
				value: parsedDateToString(ownership?.purchaseDate),
			},
			{
				id: nanoid(),
				property: 'Date of sale',
				value: parsedDateToString(ownership?.saleDate),
			},
		],
		[ownership?.purchaseDate, ownership?.saleDate]
	)

	const carActions: Action[] = useMemo(
		() => [
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.UPLOAD_CAR_PHOTO),
				label: 'Upload photo',
				icon: <MdCloudUpload size={20} />,
			},
			{
				id: nanoid(),
				callback: () => null,
				label: 'Edit car information',
				icon: <MdModeEdit size={20} />,
			},
			{
				id: nanoid(),
				callback: () => null,
				label: 'Select car as current',
				icon: <BiSolidSelectMultiple size={20} />,
			},
			{
				id: nanoid(),
				callback: () => null,
				label: 'Insurance policy',
				icon: <IoDocumentText size={20} />,
			},
			{
				id: nanoid(),
				callback: () => null,
				label: 'Technical inspection',
				icon: <MdMiscellaneousServices size={20} />,
			},
			{
				id: nanoid(),
				callback: () => null,
				label: 'Refueling sessions',
				icon: <BsFillFuelPumpFill size={20} />,
			},
			{
				id: nanoid(),
				callback: () => null,
				label: 'Repair and maintenance',
				icon: <TiSpanner size={20} />,
			},
			{
				id: nanoid(),
				callback: () => null,
				label: 'Managing Reminders',
				icon: <MdNotifications size={20} />,
			},
			{
				id: nanoid(),
				callback: () => null,
				label: 'Services and accessories',
				icon: <RiCarWashingFill size={20} />,
			},
			{
				id: nanoid(),
				callback: () => null,
				label: 'Delete car',
				icon: <MdDelete size={20} />,
			},
		],
		[modalNames.UPLOAD_CAR_PHOTO, onOpen]
	)

	return {
		isLoading,
		isError,
		carPoster,
		carName,
		shortName,
		updatedDate,
		description,
		photos,
		basicInfoList,
		specificationsList,
		registrationList,
		ownershipList,
		carActions,
	}
}
