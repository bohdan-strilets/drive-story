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
	FlexContainer,
	FooterBottom,
	FooterContent,
	FormInput,
	FormTitle,
	FormWrapper,
	Wrapper,
} from './Footer.styled'

const Footer: FC = () => {
	const { maxMobile } = useResponsive()

	return (
		<Wrapper>
			<FooterContent>
				<Container>
					<FlexContainer>
						<Logo color="white" size="small" />
						<Navigation margin={maxMobile ? '40px 0 40px 0' : ''} />

						<FormWrapper>
							<FormTitle>Newsletter</FormTitle>
							<FormInput type="text" name="name" placeholder="Name" />
							<FormInput type="text" name="email" placeholder="Email" />
							<Button variant="yellow" width="100%">
								send
							</Button>
						</FormWrapper>
					</FlexContainer>
				</Container>
			</FooterContent>
			<FooterBottom>
				<Container>
					<FlexContainer style={{ alignItems: 'center' }}>
						<Copyright />
						<DevLogo />
						<PolicyNavigation />
					</FlexContainer>
				</Container>
			</FooterBottom>
		</Wrapper>
	)
}

export default Footer
