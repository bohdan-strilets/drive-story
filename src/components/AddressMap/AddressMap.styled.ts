import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/AddressMap/AddressMapProps'

export const Wrapper = styled.div<WrapperProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: ${({ margin }) => margin};
`
