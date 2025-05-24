import { FC } from 'react'

import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'

import useModal from '@/hooks/ui/useModal'

import { getInspectionActions } from '@/descriptors/actions/getInspectionActions'
import { inspectionField } from '@/descriptors/fields/inspectionField'

import { InspectionInfoProps } from '@/types/props/Inspection/InspectionInfoProps'

import Header from '../Header'
import Timer from '../Timer'

import {
	Container,
	InformationWrapper,
	SideMenu,
} from './InspectionInfo.styled'

const InspectionInfo: FC<InspectionInfoProps> = ({ inspection }) => {
	const { onOpen } = useModal()
	const actions = getInspectionActions({ onOpen })

	return (
		<article>
			<Header
				carId={inspection.carId}
				inspectionId={inspection._id}
				updatedAt={inspection.updatedAt}
			/>

			<Timer
				startDate={inspection.inspectionDate}
				endDate={inspection.nextInspectionDate}
			/>

			<Container>
				<InformationWrapper>
					<PropertyList descriptors={inspectionField} context={inspection} />
				</InformationWrapper>
				<SideMenu>
					<ActionMenu descriptors={actions} />
				</SideMenu>
			</Container>
		</article>
	)
}

export default InspectionInfo
