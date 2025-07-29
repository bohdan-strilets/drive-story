import { RefuelingType } from '@/types/enums/RefuelingType'

import { getColor } from '@/styles/helpers/getColor'

const fuelMeta: Record<RefuelingType, { color: string; label: string }> = {
	[RefuelingType.DIESEL]: { color: getColor('#7f8c8d'), label: 'ON' },
	[RefuelingType.PETROL]: { color: getColor('#27ae60'), label: 'PB' },
	[RefuelingType.GAS]: { color: getColor('#2980b9'), label: 'LPG' },
	[RefuelingType.ELECTRIC]: { color: getColor('#00e6ac'), label: 'AC' },
}

export const getFuelMeta = (fuelType: RefuelingType | undefined | null) =>
	fuelMeta[fuelType as RefuelingType] ?? {
		color: getColor('#95a5a6'),
		label: '--',
	}

export const getFuelColor = (t?: RefuelingType) => getFuelMeta(t).color
export const getFuelLabel = (t?: RefuelingType) => getFuelMeta(t).label
