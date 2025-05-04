import { useQuery } from '@tanstack/react-query'

import { getAll } from '@/api/carApi'

import { CarKey } from '@/config/queryKeys'

import { PaginationDto } from '@/types/dto/PaginationDto'

export const useGetAllCar = (dto: PaginationDto) => {
	return useQuery({
		queryKey: [CarKey, dto.page, dto.limit],
		queryFn: async () => {
			const response = await getAll(dto)
			if (response.success) {
				return response.data
			}
		},
	})
}
