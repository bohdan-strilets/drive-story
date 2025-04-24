export const convertEngineVolume = (cc: number): string => {
	const liters = cc / 1000
	return liters.toFixed(1) // округляем до одного знака после запятой
}
