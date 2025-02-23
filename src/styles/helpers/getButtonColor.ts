import { getColor } from './getColor'

export const getButtonColor = (
	variant: string,
	state: 'default' | 'hover'
): string => {
	if (state === 'default') {
		return variant === 'yellow' ? getColor('black') : getColor('white')
	}

	if (state === 'hover') {
		return variant === 'gray' ? getColor('black') : getColor('white')
	}

	return getColor('white')
}
