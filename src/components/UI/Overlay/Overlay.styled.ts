import styled from '@emotion/styled'

import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	${flexCenterDirection('column')}

	width: 100%;
	height: 100%;

	background-color: rgba(238, 205, 16, 0.5);
	backdrop-filter: var(--blur-effect);

	opacity: 0;
	transform: translateY(-100%);
	transition:
		transform var(--hover-effect),
		opacity var(--hover-effect);
`
