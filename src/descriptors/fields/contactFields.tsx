import ExternalLink from '@/components/UI/ExternalLink'

import { formatPhoneNumber } from '@/utils/formatPhoneNumber'

import { Contact } from '@/types/types/Contact'
import { FieldDescriptor } from '@/types/types/FieldDescriptor'

export const contactFields: FieldDescriptor<Contact>[] = [
	{
		key: 'phone',
		label: 'Phone number',
		render: (contact) => {
			return contact?.phone ? (
				<ExternalLink
					href={`tel:${contact.phone}`}
					label={formatPhoneNumber(contact.phone)}
				/>
			) : (
				<p>—</p>
			)
		},
	},
	{
		key: 'email',
		label: 'E-mail',
		render: (contact) => {
			return contact?.email ? (
				<ExternalLink href={`mailto:${contact.email}`} label={contact.email} />
			) : (
				<p>—</p>
			)
		},
	},
	{
		key: 'map-link',
		label: 'Map link',
		render: (contact) => {
			return contact?.mapLink ? (
				<ExternalLink href={contact.mapLink} label={contact.mapLink} />
			) : (
				<p>—</p>
			)
		},
	},
	{
		key: 'website',
		label: 'Website',
		render: (contact) => {
			return contact?.website ? (
				<ExternalLink href={contact.website} label={contact.website} />
			) : (
				<p>—</p>
			)
		},
	},
]
