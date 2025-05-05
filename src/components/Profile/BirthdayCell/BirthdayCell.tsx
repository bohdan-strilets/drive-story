import { FC } from 'react'

import AccentText from '@/components/UI/AccentText'

import { useCalculateAge } from '@/hooks/ui/useCalculateAge'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { BirthdayCellProps } from '@/types/props/Profile/BirthdayCellProps'

const BirthdayCell: FC<BirthdayCellProps> = ({ user }) => {
	const memoBirthDate = user?.birthDate || new Date()
	const age = useCalculateAge(memoBirthDate)

	return (
		<>
			{parsedDateToString(user?.birthDate) || '—'}
			{user?.birthDate && (
				<AccentText color="yellow"> | {age.detailedAge}</AccentText>
			)}
		</>
	)
}

export default BirthdayCell
