import { FC, useMemo } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'

import { PaginationProps } from '@/types/props/UI/PaginationProps'

import Button from '../Button'

import { PageButton, Wrapper } from './Pagination.styled'

const Pagination: FC<PaginationProps> = ({
	goToPage,
	nextPage,
	prevPage,
	currentPage,
	totalPages,
}) => {
	const paginationGaps = useMemo(() => {
		const showBefore = currentPage > 3
		const showAfter = currentPage < totalPages - 2

		let paginationGroup
		if (totalPages <= 5) {
			paginationGroup = Array.from(
				{ length: totalPages },
				(_, i) => i + 1
			).slice(1, -1)
		} else if (!showBefore) {
			paginationGroup = [2, 3, 4]
		} else if (!showAfter) {
			paginationGroup = [totalPages - 3, totalPages - 2, totalPages - 1]
		} else {
			paginationGroup = [currentPage - 1, currentPage, currentPage + 1]
		}

		return {
			before: showBefore,
			after: showAfter,
			paginationGroup,
		}
	}, [currentPage, totalPages])

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
