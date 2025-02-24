import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const DecorativeLine = styled.div`
	width: 100%;
	height: 5px;

	background-color: ${getColor('yellow')};
`

export const Wrapper = styled.footer`
	background-color: ${getColor('black')};
	color: ${getColor('white')};
`

export const Container = styled.div`
	${flexCenterDirection()}
	justify-content: space-between;
	align-items: start;

	padding: 25px 25px;
`

export const NavList = styled.ul``

export const NavItem = styled.li`
	${flexCenterDirection()}

	margin-bottom: 15px;

	:last-child {
		margin-bottom: 0;
	}
`

export const NavLink = styled.p`
	margin-left: 15px;
`

export const FormWrapper = styled.form`
	${flexCenterDirection('column')}
`

export const FormInput = styled.input`
	height: 40px;
	margin-bottom: 15px;
`

export const CopyrightContainer = styled.div`
	${flexCenterDirection()}
	justify-content: space-between;

	padding: 25px 25px;

	color: ${getColor('black')};
	background-color: ${getColor('yellow')};
`

export const Copyright = styled.p`
	font-weight: 600;
	text-align: center;
`
export const DevLogoContainer = styled.div`
	${flexCenterDirection()}

	width: 40px;
	height: 40px;

	font-weight: 700;
	font-size: 18px;

	text-shadow: var(--text-shadow);
	border-radius: 5px;
	background-color: ${getColor('black')};
	color: ${getColor('yellow')};
`

export const DevLogoText = styled.p``

export const TermsNav = styled.ul`
	${flexCenterDirection()}
`

export const TermsItem = styled.li`
	${flexCenterDirection()}

	margin-right: 25px;

	:last-child {
		margin-right: 0;
	}
`

export const TermsLink = styled.p`
	margin-left: 10px;
`
