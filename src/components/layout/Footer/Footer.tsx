import { FC } from 'react'
import { BiSolidCarGarage } from 'react-icons/bi'
import { BsFuelPumpFill } from 'react-icons/bs'
import { FaImages } from 'react-icons/fa6'
import { GiAutoRepair } from 'react-icons/gi'
import { MdLocalCarWash } from 'react-icons/md'
import { RiDonutChartFill } from 'react-icons/ri'

import Button from '@/components/UI/Button'
import Logo from '@/components/UI/Logo'

import Container from '../Container'

import {
	Copyright,
	CopyrightContainer,
	DevLogoContainer,
	DevLogoText,
	FormInput,
	FormWrapper,
	MainContainer,
	NavItem,
	NavLink,
	NavList,
	TermsItem,
	TermsLink,
	TermsNav,
	Wrapper,
} from './Footer.styled'

const Footer: FC = () => {
	const currentYear = new Date().getFullYear()

	return (
		<Wrapper>
			<Container>
				<MainContainer>
					<Logo color="white" size="small" />
					<NavList>
						<NavItem>
							<BiSolidCarGarage color="var(--yellow-color)" size={20} />
							<NavLink>Garage</NavLink>
						</NavItem>
						<NavItem>
							<GiAutoRepair color="var(--yellow-color)" size={20} />
							<NavLink>Service</NavLink>
						</NavItem>
						<NavItem>
							<BsFuelPumpFill color="var(--yellow-color)" />
							<NavLink>Fuel</NavLink>
						</NavItem>
						<NavItem>
							<MdLocalCarWash color="var(--yellow-color)" size={20} />
							<NavLink>Accessories</NavLink>
						</NavItem>
						<NavItem>
							<FaImages color="var(--yellow-color)" size={18} />
							<NavLink>Gallery</NavLink>
						</NavItem>
						<NavItem>
							<RiDonutChartFill color="var(--yellow-color)" size={20} />
							<NavLink>Statistics</NavLink>
						</NavItem>
					</NavList>
					<FormWrapper>
						<FormInput type="text" name="name" />
						<FormInput type="text" name="email" />
						<Button variant="yellow" width="100%">
							send
						</Button>
					</FormWrapper>
				</MainContainer>
				<CopyrightContainer>
					<Copyright>© {currentYear} - Drive Story</Copyright>
					<DevLogoContainer>
						<DevLogoText>BS</DevLogoText>
					</DevLogoContainer>
					<TermsNav>
						<TermsItem>
							<TermsLink>Privacy policy</TermsLink>
						</TermsItem>
						<TermsItem>
							<TermsLink>Terms of use</TermsLink>
						</TermsItem>
					</TermsNav>
				</CopyrightContainer>
			</Container>
		</Wrapper>
	)
}

export default Footer
