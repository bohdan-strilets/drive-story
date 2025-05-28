import { GoogleMap } from '@react-google-maps/api'
import { FC } from 'react'

import { useMaps } from '@/hooks/ui/useMaps'

import { AddressMapProps } from '@/types/props/AddressMap/AddressMapProps'

import Loader from '../UI/Loader'
import Paragraph from '../UI/Paragraph'

import { Wrapper } from './AddressMap.styled'

const VITE_GOOGLE_MAP_ID = import.meta.env.VITE_GOOGLE_MAP_ID as string

const AddressMap: FC<AddressMapProps> = ({
	address,
	width = '100%',
	height = '400px',
	margin = '',
	zoom = 15,
}) => {
	const { isLoaded, position, onLoad } = useMaps({ address })

	if (!isLoaded) return <Loader color="gray" />

	return (
		<Wrapper width={width} height={height} margin={margin}>
			{!position ? (
				<Paragraph color="yellow" textAlign="center">
					Determining the coordinates of the address...
				</Paragraph>
			) : (
				<GoogleMap
					mapContainerStyle={{ width: '100%', height: '100%' }}
					center={position}
					zoom={zoom}
					options={{ mapId: VITE_GOOGLE_MAP_ID }}
					onLoad={onLoad}
				/>
			)}
		</Wrapper>
	)
}

export default AddressMap
