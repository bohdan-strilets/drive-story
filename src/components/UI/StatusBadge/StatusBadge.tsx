import { FC } from 'react'

import { StatusBadgeProps } from '@/types/props/UI/StatusBadgeProps'

import { Status } from './StatusBadge.styled'

const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
	return <Status status={status} />
}

export default StatusBadge
