import { routes } from '@/config/routes'

export type RouteName = (typeof routes)[keyof typeof routes]
