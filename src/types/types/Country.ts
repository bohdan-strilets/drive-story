export interface Country {
	altSpellings: string[]
	area: number
	borders: string[]
	capital: string[]
	capitalInfo: {
		latlng: [number, number]
	}
	car: {
		signs: string[]
		side: 'left' | 'right'
	}
	cca2: string
	cca3: string
	ccn3: string
	cioc: string
	coatOfArms: {
		png: string
		svg: string
	}
	continents: string[]
	currencies: {
		[code: string]: {
			name: string
			symbol: string
		}
	}
	demonyms: {
		eng: {
			f: string
			m: string
		}
		fra?: {
			f: string
			m: string
		}
	}
	fifa: string
	flag: string
	flags: {
		png: string
		svg: string
		alt: string
	}
	gini: {
		[year: string]: number
	}
	idd: {
		root: string
		suffixes: string[]
	}
	independent: boolean
	landlocked: boolean
	languages: {
		[code: string]: string
	}
	latlng: [number, number]
	maps: {
		googleMaps: string
		openStreetMaps: string
	}
	name: {
		common: string
		official: string
		nativeName: {
			[langCode: string]: {
				official: string
				common: string
			}
		}
	}
	population: number
	postalCode?: {
		format: string
		regex: string
	}
	region: string
	startOfWeek: string
	status: string
	subregion: string
	timezones: string[]
	tld: string[]
	translations: {
		[lang: string]: {
			official: string
			common: string
		}
	}
	unMember: boolean
}
