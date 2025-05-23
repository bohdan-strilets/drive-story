import { FC } from 'react'

import AccentText from '@/components/UI/AccentText'
import Paragraph from '@/components/UI/Paragraph'

import { usePaymentProgressBar } from '@/hooks/ui/usePaymentProgressBar'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { PaymentProgressBarProps } from '@/types/props/Insurance/PaymentProgressBarProps'

import {
	BadgeContainer,
	Bar,
	CheckIcon,
	Marker,
	Paided,
	Summary,
	Tooltip,
	Wrapper,
} from './PaymentProgressBar.styled'

const PaymentProgressBar: FC<PaymentProgressBarProps> = ({
	payments,
	totalAmount,
}) => {
	const {
		markers,
		paidPercent,
		hovered,
		focusedIndex,
		paidSum,
		total,
		paidCount,
		handleMouseEnter,
		handleMouseLeave,
		handleFocus,
		handleBlur,
	} = usePaymentProgressBar({ payments, totalAmount })

	return (
		<Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<Paragraph color="gray" fontWeight={700} margin="0 0 15px 0">
				Payment Schedule:
			</Paragraph>
			<Bar>
				<Paided width={paidPercent} />

				{markers.map(({ payment, position }, index) => {
					const showTooltip = hovered || focusedIndex === index

					return (
						<BadgeContainer
							key={index}
							position={position}
							tabIndex={0}
							onFocus={() => handleFocus(index)}
							onBlur={handleBlur}
						>
							<Marker isPaid={payment.isPaid} isNextRate={index === paidCount}>
								<CheckIcon />
							</Marker>

							{showTooltip && (
								<Tooltip isPaid={payment.isPaid}>
									<p>{parsedDateToString(payment.date)}</p>
									<p>{payment.amount} PLN</p>
								</Tooltip>
							)}
						</BadgeContainer>
					)
				})}
			</Bar>

			<Summary>
				<p>
					Paid <AccentText color="green">{paidSum} PLN</AccentText>
				</p>
				<p>
					out of <AccentText color="green">{total} PLN</AccentText>
				</p>
			</Summary>
		</Wrapper>
	)
}

export default PaymentProgressBar
