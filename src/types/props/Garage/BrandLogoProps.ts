export type BrandLogoProps = {
	brand: string
	margin?: string
}

export type WrapperProps = Pick<BrandLogoProps, 'margin'>
