import { Address, Contact } from '@/types/types/Contact'

export type HeaderProps = Pick<
	Contact,
	'name' | 'specializations' | 'workingHours' | '_id' | 'updatedAt'
> &
	Pick<Address, 'country' | 'city'>
