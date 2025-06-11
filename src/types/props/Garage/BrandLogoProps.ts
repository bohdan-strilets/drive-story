export type BrandLogoProps = {
	brand: string
	margin?: string
	countryFlag?: string
	isFetchFlag?: boolean
}

export type WrapperProps = Pick<BrandLogoProps, 'margin' | 'countryFlag'>
