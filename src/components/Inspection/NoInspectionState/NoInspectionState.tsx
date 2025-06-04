import { FC } from 'react'
import { MdMiscellaneousServices } from 'react-icons/md'

import ActionButton from '@/components/UI/ActionButton'
import ImageBox from '@/components/UI/ImageBox'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import noInspectionImage from '@/assets/emptyList/no-inspection.webp'

import { modalNames } from '@/config/modalConfig'

const NoInspectionState: FC = () => {
	const { onOpen } = useModal()
	const { maxTablet } = useResponsive()

	return (
		<>
			<ActionButton
				onClick={() => onOpen(modalNames.ADD_INSPECTION)}
				label="Add inspection"
				icon={<MdMiscellaneousServices />}
				height="140px"
				iconSize="80px"
				labelSize="20px"
				margin="0 0 30px 0"
			/>

			<>
				<Title fontSize={22} textAlign="center" color="yellow">
					No information about technical inspection Yet
				</Title>
				<ImageBox
					imageUrl={noInspectionImage}
					width="100%"
					height={maxTablet ? '300px' : '500px'}
					size="contain"
				/>
				<Paragraph color="black" fontWeight={600} textAlign="center">
					You have not yet added information about the technical inspection of
					your car. You can do this using the button above.
				</Paragraph>
			</>
		</>
	)
}

export default NoInspectionState
