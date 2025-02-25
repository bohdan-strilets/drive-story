import { css } from '@emotion/react'
import { CSSInterpolation, SerializedStyles } from '@emotion/serialize'

import { breakpoints } from './breakpoints'

export const media = {
	minTablet: (
		styles: TemplateStringsArray | string,
		...values: CSSInterpolation[]
	): SerializedStyles => css`
		@media screen and (min-width: ${breakpoints.tabletMin}) {
			${css(styles, ...values)}
		}
	`,

	minLaptop: (
		styles: TemplateStringsArray | string,
		...values: CSSInterpolation[]
	): SerializedStyles => css`
		@media screen and (min-width: ${breakpoints.laptopMin}) {
			${css(styles, ...values)}
		}
	`,

	minDesktop: (
		styles: TemplateStringsArray | string,
		...values: CSSInterpolation[]
	): SerializedStyles => css`
		@media screen and (min-width: ${breakpoints.desktopMin}) {
			${css(styles, ...values)}
		}
	`,

	maxMobile: (
		styles: TemplateStringsArray | string,
		...values: CSSInterpolation[]
	): SerializedStyles => css`
		@media screen and (max-width: ${breakpoints.mobileMax}) {
			${css(styles, ...values)}
		}
	`,

	maxTablet: (
		styles: TemplateStringsArray | string,
		...values: CSSInterpolation[]
	): SerializedStyles => css`
		@media screen and (max-width: ${breakpoints.tabletMax}) {
			${css(styles, ...values)}
		}
	`,

	maxLaptop: (
		styles: TemplateStringsArray | string,
		...values: CSSInterpolation[]
	): SerializedStyles => css`
		@media screen and (max-width: ${breakpoints.laptopMax}) {
			${css(styles, ...values)}
		}
	`,
}
