import { css } from '@emotion/react'

import { getColor } from '../helpers/getColor'

export const outline = () => css`
	outline: 3px solid ${getColor('rgba(238, 205, 16, 0.3)')};
`
