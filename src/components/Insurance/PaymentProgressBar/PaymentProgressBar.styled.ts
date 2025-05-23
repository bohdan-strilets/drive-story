import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { FaCheck } from 'react-icons/fa'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

const pulse = keyframes`
  0%   { transform: translate(-50%, -50%) scale(1);   opacity: 1;   }
  50%  { transform: translate(-50%, -50%) scale(1.3); opacity: 0.4; }
  100% { transform: translate(-50%, -50%) scale(1);   opacity: 1;   }
`

export const Wrapper = styled.div`
	margin: 30px 0;
`

export const Bar = styled.div`
	position: relative;

	width: calc(100% - 25px);
	height: 5px;
	margin-bottom: 30px;

	background-color: ${getColor('gray')};
`

export const Paided = styled.div<{ width: number }>`
	width: ${({ width }) => `${width}%`};
	max-width: 100%;
	height: 5px;

	background-color: ${getColor('green')};
`

export const BadgeContainer = styled.div<{ position: number }>`
	position: absolute;
	top: 50%;
	left: ${({ position }) => `${position}%`};
	transform: translateY(-50%);
	z-index: 1;

	:hover,
	:focus {
		z-index: 10;
	}
`

export const Marker = styled.div<{ isPaid: boolean; isNextRate: boolean }>`
	position: relative;

	${flexCenterDirection()}

	width: 18px;
	height: 18px;

	background-color: ${({ isPaid }) => getColor(isPaid ? 'green' : 'gray')};
	border-radius: 50%;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 25px;
		height: 25px;
	}

	::after {
		content: '';
		display: ${({ isNextRate }) => (isNextRate ? 'block' : 'none')};

		position: absolute;
		top: 50%;
		left: 50%;

		width: 17px;
		height: 17px;
		border: 3px solid rgba(135, 135, 135, 0.6);
		border-radius: 50%;

		animation: ${pulse} 1.5s ease-out infinite;

		@media screen and (min-width: ${breakpoints.tabletMin}) {
			width: 24px;
			height: 24px;

			border-width: 4px;
		}
	}
`

export const CheckIcon = styled(FaCheck)`
	width: 10px;
	height: 10px;

	color: ${getColor('white')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 16px;
		height: 16px;
	}
`

export const Tooltip = styled.div<{ isPaid: boolean }>`
	position: absolute;
	top: 125%;
	left: 50%;
	transform: translateX(-50%);

	font-size: 12px;

	padding: 0 5px;

	color: ${getColor('white')};
	background-color: ${({ isPaid }) => getColor(isPaid ? 'green' : 'gray')};
	border-radius: 3px;
	box-shadow: var(--box-shadow);

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		padding: 0 10px;
	}
`

export const Summary = styled.div`
	${flexCenterDirection()}
	justify-content: space-between;
`
