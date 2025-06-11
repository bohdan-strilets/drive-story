import { FC } from 'react'

import ButtonAsLink from '@/components/UI/ButtonAsLink'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { PasswordCellProps } from '@/types/props/Profile/PasswordCellProps'

const PasswordCell: FC<PasswordCellProps> = ({ user }) => {
	const { onOpen } = useModal()

	return (
		<>
			{user?.isGoogleAuth ? (
				<ButtonAsLink
					onClick={() => onOpen(modalNames.SET_PASSWORD)}
					label="Set password"
					color="yellow"
					hoverColor="gray"
					margin="0 15px 0 0"
				/>
			) : (
				<p>************</p>
			)}
		</>
	)
}

export default PasswordCell
