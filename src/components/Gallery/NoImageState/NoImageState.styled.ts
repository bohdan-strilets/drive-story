import styled from '@emotion/styled'
import { FaRegImages } from 'react-icons/fa'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	${flexCenterDirection('column')}

	padding: 15px 0;

	background-color: #e8e8e8;
	border: 3px solid ${getColor('#b7b7b7')};
	border-radius: 10px;
`

export const ImageIcon = styled(FaRegImages)`
	width: 105px;
	height: 105px;

	color: ${getColor('#b7b7b7')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 155px;
		height: 155px;
	}
`
