import { Contact } from '@/types/types/Contact'
import { PaginationMeta } from '@/types/types/PaginationMeta'

export type PhoneBookProps = {
	contacts: Contact[]
	paginationMeta?: PaginationMeta
	setPage: React.Dispatch<React.SetStateAction<number>>
}
