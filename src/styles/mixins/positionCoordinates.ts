import { css } from '@emotion/react'

import { Coordinates } from '@/types/types/Coordinates'

export const positionCoordinates = (position: Coordinates) => css`
	top: ${position.top || position.top};
	bottom: ${position.bottom || position.bottom};
	right: ${position.right || position.right};
	left: ${position.left || position.left};
`
