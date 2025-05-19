const currentDate = new Date()

export const inspectionRules = {
	inspectionDate: {
		min: new Date(`${currentDate.getFullYear() - 1}-01-01`),
		max: new Date(`${currentDate.getFullYear() + 1}-12-30`),
		message:
			'Specify the date from which the technical inspection of the vehicle begins.',
		required: 'Technical inspection start date required',
	},
	organization: {
		min: 1,
		max: 255,
		required: 'Organization is required',
		message: 'Organization must be between 1 and 255 characters',
	},
	isInspectionPassed: {
		required: 'Inspection status is required',
	},
	nextInspectionDate: {
		min: new Date(`${currentDate.getFullYear() - 1}-01-01`),
		max: new Date(`${currentDate.getFullYear() + 1}-12-30`),
		message: 'Please indicate the date of your next vehicle inspection.',
	},
	comments: {},
}
