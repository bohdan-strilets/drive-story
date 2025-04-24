import { css } from '@emotion/react'

import { flexCenterDirection } from './flexCenterDirection'

export const cardGridContainer = (gap: string = '5px') => css`
	${flexCenterDirection()}
	flex-wrap: wrap;
	justify-content: start;

	gap: ${gap};
	padding: 0;
`
