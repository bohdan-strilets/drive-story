import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { media } from '@/styles/media/media'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.header`
	background-color: ${getColor('yellow')};
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

export const DecorativeLine = styled.div`
	width: 100vw;
	height: 20px;

	background-color: ${getColor('black')};

	${media.minTablet`
		height: 30px;
	`}
`
