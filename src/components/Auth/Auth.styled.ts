import styled from '@emotion/styled'
import { motion } from 'motion/react'

import loginCar from '@/assets/auth/login-car.webp'
import registrationCar from '@/assets/auth/registration-car.webp'

import { InfoContainerProps, WrapperProps } from '@/types/props/Auth/AuthProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled(motion.div)<WrapperProps>`
	${flexCenterDirection('column')}
	justify-content: space-between;
	flex-direction: ${({ auth }) =>
		auth === 'login' ? 'column' : 'column-reverse'};

	width: 100%;

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		flex-direction: ${({ auth }) => (auth === 'login' ? 'row' : 'row-reverse')};
	}
`

export const FormContainer = styled.div`
	width: 100%;
	padding: 15px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		padding: 60px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		width: 50%;
		padding: 25px;
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		padding: 60px;
	}
`

export const InfoContainer = styled.div<InfoContainerProps>`
	${flexCenterDirection('column')}

	width: 100%;
	height: 480px;
	padding: 15px;

	background: ${({ auth }) =>
		`var(--black-transparent-gradient), url(${auth === 'login' ? loginCar : registrationCar});`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 5px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		padding: 30px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		width: 50%;
	}
`

export const Text = styled.p`
	text-align: center;

	margin: 50px 0;
	padding-bottom: 50px;

	color: ${getColor('white')};
	border-bottom: 2px dotted ${getColor('white')};
`
