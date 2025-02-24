import { FC } from 'react'
import { FaBrave, FaLink } from 'react-icons/fa6'

import Button from '@/components/UI/Button'
import Logo from '@/components/UI/Logo'

import {
	Container,
	Copyright,
	CopyrightContainer,
	DecorativeLine,
	DevLogoContainer,
	DevLogoText,
	FormInput,
	FormWrapper,
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
		<>
			<DecorativeLine />
			<Wrapper>
				<Container>
					<Logo color="white" size="small" />
					<NavList>
						<NavItem>
							<FaBrave color="var(--yellow-color)" size={20} />
							<NavLink>Navigation item 1</NavLink>
						</NavItem>
						<NavItem>
							<FaBrave color="var(--yellow-color)" size={20} />
							<NavLink>Navigation item 2</NavLink>
						</NavItem>
						<NavItem>
							<FaBrave color="var(--yellow-color)" size={20} />
							<NavLink>Navigation item 3</NavLink>
						</NavItem>
						<NavItem>
							<FaBrave color="var(--yellow-color)" size={20} />
							<NavLink>Navigation item 4</NavLink>
						</NavItem>
					</NavList>
					<FormWrapper>
						<FormInput type="text" name="name" />
						<FormInput type="text" name="email" />
						<Button variant="yellow" width="100%">
							send
						</Button>
					</FormWrapper>
				</Container>
				<CopyrightContainer>
					<Copyright>© {currentYear} - Drive Story</Copyright>
					<DevLogoContainer>
						<DevLogoText>BS</DevLogoText>
					</DevLogoContainer>
					<TermsNav>
						<TermsItem>
							<FaLink color="var(--black-color)" size={20} />
							<TermsLink>Privacy policy</TermsLink>
						</TermsItem>
						<TermsItem>
							<FaLink color="var(--black-color)" size={20} />
							<TermsLink>Terms of use</TermsLink>
						</TermsItem>
					</TermsNav>
				</CopyrightContainer>
			</Wrapper>
		</>
	)
}

export default Footer
