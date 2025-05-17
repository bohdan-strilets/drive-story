import { modalNames } from '@/config/modalConfig'

export type ModalName = (typeof modalNames)[keyof typeof modalNames]
