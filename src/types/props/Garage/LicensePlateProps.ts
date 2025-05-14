export type LicensePlateProps = {
	licensePlate: string
	margin?: string
}

export type WrapperProps = Pick<LicensePlateProps, 'margin'>
