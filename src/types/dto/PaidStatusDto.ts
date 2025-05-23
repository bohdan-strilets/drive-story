import { PaymentStatus } from '../types/Insurance'

export type PaidStatusDto = Pick<PaymentStatus, 'isPaid'>
