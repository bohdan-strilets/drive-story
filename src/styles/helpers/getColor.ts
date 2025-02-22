import { colorMap } from './colorMap'

export const getColor = (color: string): string => {
	return colorMap[color] || color
}
