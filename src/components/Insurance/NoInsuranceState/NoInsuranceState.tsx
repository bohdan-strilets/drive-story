import { FC } from 'react'
import { IoDocumentText } from 'react-icons/io5'

import ActionButton from '@/components/UI/ActionButton'
import ImageBox from '@/components/UI/ImageBox'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import noInsuranceImage from '@/assets/emptyList/no-insurance.webp'

import { modalNames } from '@/config/modalConfig'

const NoInsuranceState: FC = () => {
	const { onOpen } = useModal()
	const { maxTablet } = useResponsive()

	return (
		<>
			<ActionButton
				onClick={() => onOpen(modalNames.ADD_INSURANCE)}
				label="Add insurance"
				icon={<IoDocumentText />}
				height="140px"
				iconSize="80px"
				labelSize="20px"
				margin="0 0 30px 0"
			/>

			<>
				<Title fontSize={22} textAlign="center" color="yellow">
					No Insurance Policy Yet
				</Title>
				<ImageBox
					imageUrl={noInsuranceImage}
					width="100%"
					height={maxTablet ? '300px' : '500px'}
					size="contain"
				/>
				<Paragraph color="black" fontWeight={600} textAlign="center">
					You have not created an insurance policy for this vehicle yet. If
					you’d like to create one, please click the “Add Insurance” button
					above.
				</Paragraph>
			</>
		</>
	)
}

export default NoInsuranceState
