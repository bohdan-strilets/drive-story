import { FC } from 'react'

import Navigation from '@/components/Menu/Navigation'
import PolicyNavigation from '@/components/Menu/PolicyNavigation'
import Button from '@/components/UI/Button'
import Copyright from '@/components/UI/Copyright'
import DevLogo from '@/components/UI/DevLogo'
import Logo from '@/components/UI/Logo'

import useResponsive from '@/hooks/useResponsive'

import Container from '../Container'

import {
	CopyrightWrapper,
	FooterBottom,
	FooterContent,
	FormInput,
	FormTitle,
	FormWrapper,
	MainContent,
	Wrapper,
} from './Footer.styled'

const Footer: FC = () => {
	const { maxMobile } = useResponsive()

	return (
		<Wrapper>
			<FooterContent>
				<Container>
					<MainContent>
						<Logo color="white" variant="small" />
						<Navigation margin={maxMobile ? '40px 0 40px 0' : ''} />

						<FormWrapper>
							<FormTitle>Newsletter</FormTitle>
							<FormInput type="text" name="name" placeholder="Name" />
							<FormInput type="text" name="email" placeholder="Email" />
							<Button variant="yellow" width="100%">
								send
							</Button>
						</FormWrapper>
					</MainContent>
				</Container>
			</FooterContent>
			<FooterBottom>
				<Container>
					<CopyrightWrapper>
						<div>
							<Copyright textAlign="left" />
							<PolicyNavigation />
						</div>
						<div>
							<DevLogo />
						</div>
					</CopyrightWrapper>
				</Container>
			</FooterBottom>
		</Wrapper>
	)
}

export default Footer
