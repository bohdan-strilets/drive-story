import { css } from '@emotion/react'

import { breakpoints } from './breakpoints'

export const media = {
	minTablet: (styles: TemplateStringsArray | string) => css`
		@media screen and (min-width: ${breakpoints.tabletMin}) {
			${styles}
		}
	`,
	minLaptop: (styles: TemplateStringsArray | string) => css`
		@media screen and (min-width: ${breakpoints.laptopMin}) {
			${styles}
		}
	`,
	minDesktop: (styles: TemplateStringsArray | string) => css`
		@media screen and (min-width: ${breakpoints.desktopMin}) {
			${styles}
		}
	`,
	maxMobile: (styles: TemplateStringsArray | string) => css`
		@media screen and (max-width: ${breakpoints.mobileMax}) {
			${styles}
		}
	`,
	maxTablet: (styles: TemplateStringsArray | string) => css`
		@media screen and (max-width: ${breakpoints.tabletMax}) {
			${styles}
		}
	`,
	maxLaptop: (styles: TemplateStringsArray | string) => css`
		@media screen and (max-width: ${breakpoints.laptopMax}) {
			${styles}
		}
	`,
}
