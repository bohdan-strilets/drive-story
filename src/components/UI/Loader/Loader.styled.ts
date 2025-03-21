import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { GiCarWheel } from 'react-icons/gi'

import { WheelIconProps, WrapperProps } from '@/types/props/UI/LoaderProps'

import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.div<WrapperProps>`
	${flexCenterDirection()}
	margin: ${({ margin }) => margin};
`

export const WheelIcon = styled(GiCarWheel)<WheelIconProps>`
	width: ${({ size }) => size};
	height: ${({ size }) => size};

	color: ${({ color }) => color};
	animation: ${spin} 1500ms linear infinite;
`
