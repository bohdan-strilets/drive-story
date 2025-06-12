import { Image } from '@/types/types/Image'

import { ContactModalsProps } from './ContactModalsProps'

export type ClearGalleryModalProps = { images?: string | null | Image } & Pick<
	ContactModalsProps,
	'contactId'
>
