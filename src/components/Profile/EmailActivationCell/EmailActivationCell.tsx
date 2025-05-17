import { FC } from 'react'

import ButtonAsLink from '@/components/UI/ButtonAsLink'
import StatusBadge from '@/components/UI/StatusBadge'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { EmailActivationCellProps } from '@/types/props/Profile/EmailActivationCellProps'

import { Wrapper } from './EmailActivationCell.styled'

const EmailActivationCell: FC<EmailActivationCellProps> = ({ user }) => {
	const { onOpen } = useModal()

	return (
		<Wrapper>
			{!user?.isActivated && (
				<ButtonAsLink
					onClick={() => onOpen(modalNames.RESEND_EMAIL)}
					label="Send activation email"
					color="yellow"
					hoverColor="gray"
					margin="0 15px 0 0"
				/>
			)}
			<StatusBadge status={!!user?.isActivated} />
		</Wrapper>
	)
}

export default EmailActivationCell
