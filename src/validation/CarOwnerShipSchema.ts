import * as yup from 'yup'

export const CarOwnerShipSchema = yup.object({
	purchaseDate: yup
		.date()
		.typeError('Purchase date must be a valid date')
		.nullable()
		.optional(),

	saleDate: yup
		.date()
		.typeError('Sale date must be a valid date')
		.nullable()
		.optional()
		.test(
			'saleDate-check',
			'Sale date cannot be before purchase date',
			function (saleDate) {
				const { purchaseDate } = this.parent
				if (purchaseDate && saleDate) {
					return new Date(saleDate) >= new Date(purchaseDate)
				}
				return true
			}
		),
})
