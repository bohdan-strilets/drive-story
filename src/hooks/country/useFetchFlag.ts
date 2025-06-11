import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { fetchFlag } from '@/api/countriesApi'

import { CountryKey } from '@/config/queryKeys'

import { Country } from '@/types/types/Country'

export const useFetchFlag = (
	countryName?: string
): UseQueryResult<Country[]> => {
	return useQuery({
		queryKey: [CountryKey, countryName],
		queryFn: async () => {
			if (!countryName) throw new Error('No country name provided')

			const response = await fetchFlag(countryName)
			return response
		},

		enabled: Boolean(countryName),
	})
}
