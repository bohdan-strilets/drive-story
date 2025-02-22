import { css } from '@emotion/react'

export const flexCenterDirection = (
	direction: 'row' | 'column' = 'row',
	flex: 'flex' | 'inline-flex' = 'flex'
) => css`
	display: ${flex};
	flex-direction: ${direction};
	align-items: center;
	justify-content: center;
`
