import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.header`
	background-color: ${getColor('yellow')};

	border-bottom: 20px solid ${getColor('black')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		border-bottom: 30px solid ${getColor('black')};
	}
`

export const ActionsContainer = styled.div`
	${flexCenterDirection()}
	justify-content: space-between;

	padding: 25px;

	> *:only-child {
		margin-left: auto;
	}
`

export const LogoContainer = styled.div`
	${flexCenterDirection()}

	padding: 80px 25px 130px 25px;
`
