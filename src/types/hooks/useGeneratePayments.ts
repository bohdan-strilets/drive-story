import { Insurance, PaymentStatus } from '../types/Insurance'

export type Params = Pick<Insurance, 'startDate' | 'endDate'> &
	Pick<PaymentStatus, 'installmentsCount' | 'totalInstallmentsSum' | 'isPaid'>
