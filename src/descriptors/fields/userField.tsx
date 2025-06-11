import BirthdayCell from '@/components/Profile/BirthdayCell'
import EmailActivationCell from '@/components/Profile/EmailActivationCell'
import PasswordCell from '@/components/Profile/PasswordCell'

import { formatPhoneNumber } from '@/utils/formatPhoneNumber'
import { formatLabel } from '@/utils/generateDropdownOptions'

import { FieldDescriptor } from '@/types/types/FieldDescriptor'
import { User } from '@/types/types/User'

export const userField: FieldDescriptor<User>[] = [
	{
		key: 'email',
		label: 'Email',
		render: (user) => user?.email || '—',
	},
	{
		key: 'activated',
		label: 'Email activated',
		render: (user) => <EmailActivationCell user={user} />,
	},
	{
		key: 'password',
		label: 'Password',
		render: (user) => <PasswordCell user={user} />,
	},
	{
		key: 'birthday',
		label: 'Birthday',
		render: (user) => <BirthdayCell user={user} />,
	},
	{
		key: 'phone',
		label: 'Phone number',
		render: (user) => formatPhoneNumber(user?.phoneNumber || '—'),
	},
	{
		key: 'gender',
		label: 'Gender',
		render: (user) => formatLabel(user?.gender || ''),
	},
	{
		key: 'country',
		label: 'Country',
		render: (user) => user?.location?.country || '—',
	},
	{
		key: 'city',
		label: 'City',
		render: (user) => user?.location?.city || '—',
	},
	{
		key: 'postal-code',
		label: 'Postal code',
		render: (user) => user?.location?.postalCode || '—',
	},
]
