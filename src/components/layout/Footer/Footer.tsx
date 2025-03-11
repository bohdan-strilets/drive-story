import { FC } from 'react'

import Subscribe from '@/components/Forms/Subscribe'
import Navigation from '@/components/Menu/Navigation'
import PolicyNavigation from '@/components/Menu/PolicyNavigation'
import Copyright from '@/components/UI/Copyright'
import DevLogo from '@/components/UI/DevLogo'
import Logo from '@/components/UI/Logo'

import useResponsive from '@/hooks/useResponsive'

import Container from '../Container'

import {
	CopyrightWrapper,
	FooterBottom,
	FooterContent,
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
						<Logo color="white" size="small" />
						<Navigation margin={maxMobile ? '40px 0 40px 0' : ''} />
						<Subscribe />
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
