import styled from '@emotion/styled'

import { TrackProps, WrapperProps } from '@/types/props/UI/SwitchProps'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'
import { outline } from '@/styles/mixins/outline'

export const Wrapper = styled.div<WrapperProps>`
	${flexCenterDirection('column')}
	align-items: start;

	margin: ${({ margin }) => margin || '0'};
`

export const Track = styled.div<TrackProps>`
	position: relative;

	width: 40px;
	height: 20px;

	border-radius: 12px;
	background: ${({ checked }) =>
		checked ? getColor('yellow') : getColor('#e7e7e7')};

	transition: background 0.2s ease;
`

export const SwitchRole = styled.div`
	display: inline-flex;
	align-items: center;

	cursor: pointer;
	outline: none;

	&:focus .track {
		${outline()}
	}
`

export const Thumb = styled.div<TrackProps>`
	position: absolute;
	top: 2px;
	left: ${({ checked }) => (checked ? '22px' : '2px')};

	width: 16px;
	height: 16px;

	border-radius: 50%;
	background: ${getColor('white')};

	transition: left 0.2s ease;
`
