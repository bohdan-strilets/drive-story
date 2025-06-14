import { OverlayAction } from '@/types/types/OverlayAction'
import { User } from '@/types/types/User'

export type PostersModalProps = {
	user: User
	posterActions: OverlayAction[]
	isPosterLoading: boolean
}
