import { Contact } from '@/types/types/Contact'

export type ContactCardProps = Pick<
	Contact,
	'name' | 'specializations' | 'phone' | 'email' | 'website' | 'photos'
>
