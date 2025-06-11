import apiClient from '@/config/axiosConfig'

import { Country } from '@/types/types/Country'

const ENDPOINT = 'https://restcountries.com/v3.1'

export const fetchFlag = async (
	countryName?: string
): Promise<Country[] | void> => {
	try {
		const path = `${ENDPOINT}/name/${countryName}`
		const { data } = await apiClient.get(path)
		return data
	} catch (error) {
		console.error(error)
	}
}
