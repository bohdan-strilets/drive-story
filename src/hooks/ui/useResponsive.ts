import { useMediaQuery } from 'react-responsive'

import { breakpoints } from '@/styles/media/breakpoints'

const useResponsive = () => {
	const minTablet = useMediaQuery({
		query: `(min-width: ${breakpoints.tabletMin})`,
	})

	const minLaptop = useMediaQuery({
		query: `(min-width: ${breakpoints.laptopMin})`,
	})

	const minDesktop = useMediaQuery({
		query: `(min-width: ${breakpoints.desktopMin})`,
	})

	const maxMobile = useMediaQuery({
		query: `(max-width: ${breakpoints.mobileMax})`,
	})

	const maxTablet = useMediaQuery({
		query: `(max-width: ${breakpoints.tabletMax})`,
	})

	const maxLaptop = useMediaQuery({
		query: `(max-width: ${breakpoints.laptopMax})`,
	})

	return {
		minTablet,
		minLaptop,
		minDesktop,
		maxMobile,
		maxTablet,
		maxLaptop,
	}
}

export default useResponsive
