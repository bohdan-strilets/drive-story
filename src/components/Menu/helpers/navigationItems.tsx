import { BiSolidCarGarage } from 'react-icons/bi'
import { BsFuelPumpFill } from 'react-icons/bs'
import { FaImages } from 'react-icons/fa6'
import { GiAutoRepair } from 'react-icons/gi'
import { MdLocalCarWash } from 'react-icons/md'
import { RiDonutChartFill } from 'react-icons/ri'

import { routes } from './routes'

export const navigationItems = [
	{
		id: '0',
		route: routes.GARAGE,
		icon: <BiSolidCarGarage color="var(--yellow-color)" size={20} />,
		label: 'Garage',
	},
	{
		id: '1',
		route: routes.SERVICE,
		icon: <GiAutoRepair color="var(--yellow-color)" size={20} />,
		label: 'Service',
	},
	{
		id: '2',
		route: routes.FUEL,
		icon: <BsFuelPumpFill color="var(--yellow-color)" />,
		label: 'Fuel',
	},
	{
		id: '3',
		route: routes.ACCESSORIES,
		icon: <MdLocalCarWash color="var(--yellow-color)" size={20} />,
		label: 'Accessories',
	},
	{
		id: '4',
		route: routes.GALLERY,
		icon: <FaImages color="var(--yellow-color)" size={18} />,
		label: 'Gallery',
	},
	{
		id: '5',
		route: routes.STATISTICS,
		icon: <RiDonutChartFill color="var(--yellow-color)" size={20} />,
		label: 'Statistics',
	},
]
