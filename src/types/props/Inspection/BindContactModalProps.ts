import { BindContactProps } from '../PhoneBook/BindContactProps'

export type BindContactModalProps = Pick<
	BindContactProps,
	'bindContact' | 'isBinding' | 'entityId'
>
