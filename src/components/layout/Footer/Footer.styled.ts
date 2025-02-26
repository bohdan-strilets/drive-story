import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.footer`
	background-color: ${getColor('black')};
	color: ${getColor('white')};
`

export const FooterContent = styled.div`
	padding: 15px;
	border-top: 5px solid ${getColor('yellow')};

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		padding: 25px;
	}
`

export const FlexContainer = styled.div`
	@media screen and (min-width: ${breakpoints.tabletMin}) {
		${flexCenterDirection()}
		justify-content: space-between;
		align-items: start;

		& > * {
			max-width: 33%;
		}
	}
`

export const FormWrapper = styled.form`
	${flexCenterDirection('column')}
`

export const FormTitle = styled.p`
	width: 100%;
	margin-bottom: 15px;

	text-transform: uppercase;
	font-weight: 700;
	font-size: 18px;

	color: ${getColor('yellow')};
`

export const FormInput = styled.input`
	width: 100%;
	height: 30px;
	margin-bottom: 15px;
	padding: 10px;

	border-radius: 3px;
`

export const FooterBottom = styled.div`
	padding: 15px;

	color: ${getColor('white')};
	background-color: ${getColor('gray')};
	box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.5) inset;

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		padding: 25px;
	}
`
