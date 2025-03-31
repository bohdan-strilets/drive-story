import { FC } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'

import usePagination from '@/hooks/ui/usePagination'

import { PaginationProps } from '@/types/props/UI/PaginationProps'

import Button from '../Button'

import { PageButton, Wrapper } from './Pagination.styled'

const Pagination: FC<PaginationProps> = ({
	images,
	itemsPerPage,
	handlePageChange,
}) => {
	const paginationParams = {
		count: images.length,
		itemsPerPage,
		handlePageChange,
		images,
	}

	const {
		totalPages,
		nextPage,
		prevPage,
		goToPage,
		currentPage,
		paginationGaps,
	} = usePagination(paginationParams)

	return (
		<Wrapper>
			<Button
				onClick={prevPage}
				color={'black'}
				background={'yellow'}
				hoverColor={'white'}
				hoverBackground={'gray'}
				disabled={currentPage === 1}
				width="40px"
				height="30px"
			>
				<RiArrowLeftSFill size={25} />
			</Button>

			<PageButton onClick={() => goToPage(1)} disabled={currentPage === 1}>
				1
			</PageButton>

			{paginationGaps.before && <HiDotsHorizontal />}

			{paginationGaps.paginationGroup.map((page) => (
				<PageButton
					key={page}
					onClick={() => goToPage(page)}
					disabled={currentPage === page}
				>
					{page}
				</PageButton>
			))}

			{paginationGaps.after && <HiDotsHorizontal />}

			<PageButton
				onClick={() => goToPage(totalPages)}
				disabled={currentPage === totalPages}
			>
				{totalPages}
			</PageButton>

			<Button
				onClick={nextPage}
				color={'black'}
				background={'yellow'}
				hoverColor={'white'}
				hoverBackground={'gray'}
				disabled={currentPage === totalPages}
				width="40px"
				height="30px"
			>
				<RiArrowRightSFill size={25} />
			</Button>
		</Wrapper>
	)
}

export default Pagination
