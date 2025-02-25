import { FC } from 'react'

import { LayoutProps } from '@/types/props/Layout/LayoutProps'

import Container from './Container'
import Footer from './Footer'
import Header from './Header'
import { Main } from './Layout.styled'

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<Container>
				<Main>{children}</Main>
			</Container>
			<Footer />
		</>
	)
}

export default Layout
