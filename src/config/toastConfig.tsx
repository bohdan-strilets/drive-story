import { BiLoaderCircle } from 'react-icons/bi'
import { ImCheckmark, ImCross } from 'react-icons/im'

import { CustomToastOptions } from '@/types/interfaces/ToastOptions'

export const toastConfig: CustomToastOptions = {
	duration: 4000,
	style: {
		background: 'var(--white-color)',
		color: 'var(--black-color)',
	},

	success: {
		icon: <ImCheckmark />,
		style: {
			background: 'var(--green-color)',
			color: 'var(--white-color)',
		},
	},

	error: {
		icon: <ImCross />,
		style: {
			background: 'var(--red-color)',
			color: 'var(--white-color)',
		},
	},

	loading: {
		icon: <BiLoaderCircle />,
		style: {
			background: 'var(--gray-color)',
			color: 'var(--black-color)',
		},
	},
}
