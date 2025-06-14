import { OverlayAction } from '@/types/types/OverlayAction'
import { User } from '@/types/types/User'

export type AvatarsModalProps = {
	user: User
	avatarActions: OverlayAction[]
	isAvatarLoading: boolean
}
