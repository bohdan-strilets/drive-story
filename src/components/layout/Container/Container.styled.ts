import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'
import { media } from '@/styles/media/media'

export const Wrapper = styled.div`
	margin: 0 auto;
	width: 320px;

	${media.minTablet`
		width: ${breakpoints.tabletMin};
	`}

	${media.minLaptop`
		width: ${breakpoints.laptopMin};
	`}

	${media.minDesktop`
		width: ${breakpoints.desktopMin};
	`}
`
