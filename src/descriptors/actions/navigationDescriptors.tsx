import { BiSolidCarGarage, BiSupport } from 'react-icons/bi'
import { BsFuelPumpFill } from 'react-icons/bs'
import { FaImages, FaUserGear } from 'react-icons/fa6'
import { GiAutoRepair } from 'react-icons/gi'
import { IoHome } from 'react-icons/io5'
import { MdLocalCarWash } from 'react-icons/md'
import { RiDonutChartFill } from 'react-icons/ri'

import { routes } from '@/config/routes'

import { NavigationDescriptor } from '@/types/types/NavigationDescriptor'

export const navigationDescriptors: NavigationDescriptor[] = [
	{
		key: 'home',
		label: 'Home',
		icon: <IoHome color="var(--yellow-color)" size={20} className="icon" />,
		route: routes.HOME,
	},
	{
		key: 'profile',
		label: 'Profile',
		icon: <FaUserGear color="var(--yellow-color)" size={20} className="icon" />,
		route: routes.PROFILE,
	},
	{
		key: 'garage',
		label: 'Garage',
		icon: (
			<BiSolidCarGarage
				color="var(--yellow-color)"
				size={20}
				className="icon"
			/>
		),
		route: routes.GARAGE,
	},
	{
		key: 'service',
		label: 'Service',
		icon: (
			<GiAutoRepair color="var(--yellow-color)" size={20} className="icon" />
		),
		route: routes.SERVICE,
	},
	{
		key: 'fuel',
		label: 'Fuel',
		icon: (
			<BsFuelPumpFill color="var(--yellow-color)" size={20} className="icon" />
		),
		route: routes.FUEL,
	},
	{
		key: 'accessories',
		label: 'Accessories',
		icon: (
			<MdLocalCarWash color="var(--yellow-color)" size={20} className="icon" />
		),
		route: routes.ACCESSORIES,
	},
	{
		key: 'gallery',
		label: 'Gallery',
		icon: <FaImages color="var(--yellow-color)" size={18} className="icon" />,
		route: routes.GALLERY,
	},
	{
		key: 'statistics',
		label: 'Statistics',
		icon: (
			<RiDonutChartFill
				color="var(--yellow-color)"
				size={20}
				className="icon"
			/>
		),
		route: routes.STATISTICS,
	},
	{
		key: 'contacts',
		label: 'Contacts',
		icon: <BiSupport color="var(--yellow-color)" size={20} className="icon" />,
		route: routes.CONTACTS,
	},
]
