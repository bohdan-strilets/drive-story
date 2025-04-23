import styled from '@emotion/styled'

import {
	FilledTrackProps,
	WrapperProps,
} from '@/types/props/UI/RangeInputProps'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div<WrapperProps>`
	display: flex;
	flex-direction: column;

	width: ${({ width }) => width};
	margin: ${({ margin }) => margin};
`

export const RangeContainer = styled.div`
	position: relative;
`

export const Track = styled.div`
	position: relative;

	width: 100%;
	height: 8px;

	background-color: ${getColor('gray')};
	border-radius: 3px;

	cursor: pointer;
`

export const FilledTrack = styled.div<FilledTrackProps>`
	position: absolute;
	top: 0;
	left: 0;

	height: 100%;
	width: ${({ percentage }) => `calc(${percentage * 100}% - ${14 / 3}px)`};

	background-color: ${getColor('yellow')};
	border-radius: 3px;
`

export const Thumb = styled.div<FilledTrackProps>`
	position: absolute;
	top: 50%;
	left: ${({ percentage }) => `calc(${percentage * 100}% - ${14 / 2}px)`};
	transform: translateY(-50%);

	width: 14px;
	height: 14px;

	border-radius: 5px;
	background-color: ${getColor('yellow')};

	cursor: pointer;
	user-select: none;
`

export const ValueContainer = styled.div`
	${flexCenterDirection()}
	justify-content: space-between;

	margin-top: 8px;
`

export const ValueLabel = styled.span`
	font-size: 12px;
	color: ${getColor('black')};
`
