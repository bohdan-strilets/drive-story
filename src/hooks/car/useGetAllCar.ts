import { useQuery } from '@tanstack/react-query'

import { getAll } from '@/api/carApi'

import { CarKey } from '@/config/queryKeys'

import { useCarStore } from '@/store/useCarStore'

import { PaginationDto } from '@/types/dto/PaginationDto'

export const useGetAllCar = (dto: PaginationDto) => {
	const setCars = useCarStore((state) => state.setCars)

	return useQuery({
		queryKey: [CarKey, dto.page, dto.limit],
		queryFn: async () => {
			const response = await getAll(dto)
			if (response.success) {
				setCars(response.data || null)
				return response.data
			}
		},
	})
}
