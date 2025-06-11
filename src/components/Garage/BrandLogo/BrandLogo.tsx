import { FC } from 'react'
import { GiAbstract021 } from 'react-icons/gi'
import * as simpleIcons from 'simple-icons'
import { SimpleIcon } from 'simple-icons'

import ImageBox from '@/components/UI/ImageBox'
import Loader from '@/components/UI/Loader'

import useResponsive from '@/hooks/ui/useResponsive'

import { isSimpleIcon } from '@/types/guards/isSimpleIcon'
import { BrandLogoProps } from '@/types/props/Garage/BrandLogoProps'

import { alphanumericOnlyRegex } from '@/regex/alphanumericOnlyRegex'

import { getColor } from '@/styles/helpers/getColor'

import { Wrapper } from './BrandLogo.styled'

const BrandLogo: FC<BrandLogoProps> = ({
	brand,
	margin = '',
	countryFlag,
	isFetchFlag = false,
}) => {
	const { maxMobile } = useResponsive()

	const sanitizedBrand = brand.replace(alphanumericOnlyRegex, '')

	const key = `si${sanitizedBrand[0]?.toUpperCase() + sanitizedBrand.slice(1).toLowerCase()}`

	const iconsMap = simpleIcons as unknown as Record<
		string,
		SimpleIcon | undefined
	>

	const iconCandidate = iconsMap[key]

	return (
		<div>
			<Wrapper margin={margin}>
				{isSimpleIcon(iconCandidate) ? (
					<svg
						role="img"
						viewBox="0 0 24 24"
						dangerouslySetInnerHTML={{ __html: iconCandidate.svg }}
						width="100%"
						height="100%"
						fill={`#${iconCandidate.hex}`}
					/>
				) : (
					<GiAbstract021 size="100%" color={getColor('black')} />
				)}
			</Wrapper>
			{isFetchFlag && <Loader color="yellow" />}
			{countryFlag && (
				<ImageBox
					imageUrl={countryFlag}
					width={maxMobile ? '50px' : '110px'}
					height={maxMobile ? '35px' : '60px'}
					margin="10px 0 0 0"
				/>
			)}
		</div>
	)
}

export default BrandLogo
