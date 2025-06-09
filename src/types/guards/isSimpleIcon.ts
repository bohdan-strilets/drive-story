import { SimpleIcon } from 'simple-icons'

export const isSimpleIcon = (icon: unknown): icon is SimpleIcon => {
	return (
		typeof icon === 'object' &&
		icon !== null &&
		'title' in icon &&
		'slug' in icon &&
		'svg' in icon &&
		'hex' in icon
	)
}
