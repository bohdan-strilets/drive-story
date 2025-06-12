import { Contact } from '@/types/types/Contact'

import { BindContactProps } from './BindContactProps'

export type ContactWidgetProps<T> = {
	contact?: Contact
	margin?: string
} & Pick<BindContactProps<T>, 'isBinding' | 'bindContact'>

export type WrapperProps<T> = Pick<ContactWidgetProps<T>, 'margin'>
