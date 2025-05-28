import { useJsApiLoader } from '@react-google-maps/api'
import { useCallback, useEffect, useState } from 'react'

import { MAP_LIBRARIES } from '@/config/googleConfig'

import { Params } from '@/types/hooks/useMaps'

const VITE_GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY as string

export const useMaps = ({ address }: Params) => {
	const [map, setMap] = useState<google.maps.Map | null>(null)
	const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(
		null
	)

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: VITE_GOOGLE_API_KEY,
		libraries: MAP_LIBRARIES,
	})

	const formattedAddress = [
		address.street,
		address.houseNumber,
		address.city,
		address.postalCode,
		address.country,
	]
		.filter(Boolean)
		.join(', ')

	const onLoad = useCallback((mapInstance: google.maps.Map) => {
		setMap(mapInstance)
	}, [])

	useEffect(() => {
		if (!isLoaded || !formattedAddress) return
		const geocoder = new google.maps.Geocoder()
		geocoder.geocode({ address: formattedAddress }, (results, status) => {
			if (status === 'OK' && results?.[0]?.geometry.location) {
				setPosition({
					lat: results[0].geometry.location.lat(),
					lng: results[0].geometry.location.lng(),
				})
			} else {
				console.error('Geocode error:', status)
			}
		})
	}, [isLoaded, formattedAddress])

	useEffect(() => {
		if (map && position) {
			const marker = new google.maps.marker.AdvancedMarkerElement({
				map,
				position,
			})
			return () => {
				marker.map = null
			}
		}
	}, [map, position])

	return { isLoaded, position, onLoad }
}
