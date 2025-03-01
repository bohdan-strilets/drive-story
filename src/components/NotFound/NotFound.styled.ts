import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	padding: 100px 0;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		${flexCenterDirection()}
		justify-content: space-between;
		padding: 150px 0;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		padding: 200px 0;
	}
`

export const Container = styled.div`
	${flexCenterDirection('column')}
	margin-bottom: 50px;
	padding-bottom: 50px;

	border-bottom: 3px solid ${getColor('yellow')};

	:last-child {
		margin-bottom: 0;
		padding-bottom: 0;
		border-bottom: none;
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 48%;
		margin-bottom: 0;
		padding-bottom: 0;
		border-bottom: none;

		border-right: 3px solid ${getColor('yellow')};

		:last-child {
			border-right: none;
		}
	}
`

export const StatusCode = styled(motion.div)`
	${flexCenterDirection()}

	font-weight: 900;
	font-size: 90px;
	line-height: 1;

	margin-bottom: 30px;
	color: ${getColor('yellow')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 120px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		font-size: 180px;
	}
`

export const Subtitle = styled.p`
	font-weight: 700;
	font-size: 18px;

	@media screen and(min-width: ${breakpoints.tabletMin}) {
		font-size: 24px;
	}
`

export const InfoText = styled.p`
	font-size: 18px;
	font-weight: 500;
	text-align: center;

	margin-bottom: 15px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		margin-bottom: 50px;
		font-size: 16px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		font-size: 18px;
	}
`
