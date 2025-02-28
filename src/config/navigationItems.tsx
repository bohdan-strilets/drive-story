import { BiSolidCarGarage, BiSupport } from 'react-icons/bi'
import { BsFuelPumpFill } from 'react-icons/bs'
import { FaImages, FaUserGear } from 'react-icons/fa6'
import { GiAutoRepair } from 'react-icons/gi'
import { IoHome } from 'react-icons/io5'
import { MdLocalCarWash } from 'react-icons/md'
import { RiDonutChartFill } from 'react-icons/ri'

import { routes } from './routes'

export const navigationItems = [
	{
		id: '0',
		route: routes.HOME,
		icon: <IoHome color="var(--yellow-color)" size={20} className="icon" />,
		label: 'Home',
	},
	{
		id: '1',
		route: routes.PROFILE,
		icon: <FaUserGear color="var(--yellow-color)" size={20} className="icon" />,
		label: 'Profile',
	},
	{
		id: '2',
		route: routes.GARAGE,
		icon: (
			<BiSolidCarGarage
				color="var(--yellow-color)"
				size={20}
				className="icon"
			/>
		),
		label: 'Garage',
	},
	{
		id: '3',
		route: routes.SERVICE,
		icon: (
			<GiAutoRepair color="var(--yellow-color)" size={20} className="icon" />
		),
		label: 'Service',
	},
	{
		id: '4',
		route: routes.FUEL,
		icon: <BsFuelPumpFill color="var(--yellow-color)" className="icon" />,
		label: 'Fuel',
	},
	{
		id: '5',
		route: routes.ACCESSORIES,
		icon: (
			<MdLocalCarWash color="var(--yellow-color)" size={20} className="icon" />
		),
		label: 'Accessories',
	},
	{
		id: '6',
		route: routes.GALLERY,
		icon: <FaImages color="var(--yellow-color)" size={18} className="icon" />,
		label: 'Gallery',
	},
	{
		id: '7',
		route: routes.STATISTICS,
		icon: (
			<RiDonutChartFill
				color="var(--yellow-color)"
				size={20}
				className="icon"
			/>
		),
		label: 'Statistics',
	},
	{
		id: '8',
		route: routes.CONTACTS,
		icon: <BiSupport color="var(--yellow-color)" size={20} className="icon" />,
		label: 'Contacts',
	},
]
