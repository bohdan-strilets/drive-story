import { Insurance } from '@/types/types/Insurance'

import { BindContactProps } from '../PhoneBook/BindContactProps'

export type BindContactModalProps = Pick<
	BindContactProps<Insurance>,
	'bindContact' | 'isBinding'
>
