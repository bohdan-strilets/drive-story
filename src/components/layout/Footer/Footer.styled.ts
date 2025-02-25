import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.footer`
	background-color: ${getColor('black')};
	color: ${getColor('white')};
`

export const MainContainer = styled.div`
	${flexCenterDirection()}
	justify-content: space-between;
	align-items: start;

	padding: 25px 25px;

	border-top: 5px solid ${getColor('yellow')};
`

export const NavList = styled.ul``

export const NavItem = styled.li`
	${flexCenterDirection()}
	justify-content: start;

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
	width: 300px;
	height: 40px;
	margin-bottom: 15px;
`

export const CopyrightContainer = styled.div`
	${flexCenterDirection()}
	justify-content: space-between;

	padding: 25px 25px;

	color: ${getColor('white')};
	background-color: ${getColor('gray')};
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

export const DevLogoText = styled.p`
	color: ${getColor('white')};
`

export const TermsNav = styled.ul`
	${flexCenterDirection()}
`

export const TermsItem = styled.li`
	${flexCenterDirection()}

	margin-right: 10px;

	:last-child {
		margin-right: 0;
	}
`

export const TermsLink = styled.p`
	font-size: 14px;
`
