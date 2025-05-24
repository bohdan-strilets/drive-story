import styled from '@emotion/styled'

import { informationWrapper } from '@/styles/mixins/informationWrapper'
import { itemInformationContainer } from '@/styles/mixins/itemInformationContainer'
import { sideMenuWrapper } from '@/styles/mixins/sideMenuWrapper'

export const Container = styled.div`
	${itemInformationContainer()}
`

export const InformationWrapper = styled.div`
	${informationWrapper()}
`

export const SideMenu = styled.div`
	${sideMenuWrapper()}
`
