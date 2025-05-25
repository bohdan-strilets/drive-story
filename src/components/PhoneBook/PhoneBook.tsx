import { FC } from 'react'

import ContactCard from './ContactCard'
import { Item } from './PhoneBook.styled'

const contacts = [
	{
		id: '1',
		name: 'Engine Garage',
		phone: '678 456 190',
		email: 'bohdan.strilets@gmail.com',
		address: {
			street: 'Main Street',
			houseNumber: '123A',
			city: 'Springfield',
			country: 'USA',
			postalCode: '12345',
		},
		mapLink: 'https://maps.example.com/?q=Engine+Garage',
		website: 'https://enginegarage.com',
		workingHours: ['08:00', '17:00'],
		specializations: ['engine', 'transmission', 'oil'],
	},
	{
		id: '2',
		name: 'Quick Tires',
		phone: '987 654 321',
		email: 'support@quicktires.com',
		address: {
			street: 'Oak Avenue',
			houseNumber: '45',
			city: 'Rivertown',
			country: 'USA',
			postalCode: null,
		},
		mapLink: 'https://maps.example.com/?q=Quick+Tires',
		workingHours: ['09:00', '18:00'],
		specializations: ['tires', 'wheel alignment', 'balancing'],
	},
	{
		id: '3',
		name: 'Brake Specialists',
		phone: '456 789 012',
		address: {
			street: 'Pine Road',
			houseNumber: '78',
			city: 'Lakeside',
			country: 'USA',
			postalCode: '24680',
		},
		mapLink: 'https://maps.example.com/?q=Brake+Specialists',
		workingHours: ['07:30', '16:30'],
		specializations: ['brakes', 'pads', 'rotors'],
	},
	{
		id: '4',
		name: 'Auto Electric',
		phone: '321 654 987',
		email: 'service@autoelectric.com',
		address: {
			street: 'Elm Street',
			houseNumber: '101',
			city: 'Hillview',
			country: 'USA',
			postalCode: '13579',
		},
		mapLink: 'https://maps.example.com/?q=Auto+Electric',
		website: 'https://autoelectric.com',
		workingHours: ['10:00', '19:00'],
		specializations: ['electrical', 'battery', 'starters'],
	},
	{
		id: '5',
		name: 'Full Service Center',
		phone: '654 321 098',
		email: 'hello@fullservicecenter.com',
		address: {
			street: 'Birch Boulevard',
			houseNumber: '202',
			city: 'Mapleton',
			country: 'USA',
			postalCode: '11223',
		},
		mapLink: 'https://maps.example.com/?q=Full+Service+Center',
		website: 'https://fullservicecenter.com',
		workingHours: ['08:00', '20:00'],
		specializations: [
			'engine',
			'transmission',
			'electrical',
			'tires',
			'brakes',
		],
	},
]

const PhoneBook: FC = () => {
	return (
		<ul>
			{contacts.map((contact) => (
				<Item key={contact.id}>
					<ContactCard
						name={contact.name}
						phone={contact.phone}
						specializations={contact.specializations}
						email={contact.email}
						website={contact.website}
					/>
				</Item>
			))}
		</ul>
	)
}

export default PhoneBook
