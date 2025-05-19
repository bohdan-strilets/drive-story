import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loader from './components/UI/Loader'
import { routes } from './config/routes'
import { useGetCurrentUser } from './hooks/user/useGetCurrentUser'
import ActivationSuccessPage from './pages/ActivationSuccessPage'
import AuthPage from './pages/AuthPage'
import CarInformationPage from './pages/CarInformationPage'
import GaragePage from './pages/GaragePage'
import HomePage from './pages/HomePage'
import InsurancePage from './pages/InsurancePage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'
import RecoverPasswordPage from './pages/RecoverPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'

const App: FC = () => {
	const { isLoading } = useGetCurrentUser()

	if (isLoading) {
		return <Loader color="gray" />
	}

	return (
		<>
			<Routes>
				<Route path={routes.HOME} element={<HomePage />} />
				<Route path={routes.AUTH} element={<AuthPage />} />
				<Route
					path={routes.RECOVER_PASSWORD}
					element={<RecoverPasswordPage />}
				/>
				<Route
					path={routes.ACTIVATION_SUCCESS}
					element={<ActivationSuccessPage />}
				/>
				<Route path={routes.RESET_PASSWORD} element={<ResetPasswordPage />} />
				<Route path={routes.PROFILE} element={<ProfilePage />} />
				<Route path={routes.GARAGE} element={<GaragePage />} />
				<Route
					path={`${routes.CAR_INFORMATION}/:carId`}
					element={<CarInformationPage />}
				/>
				<Route
					path={`${routes.CAR_INFORMATION}/:carId/${routes.INSURANCE}/:insuranceId?`}
					element={<InsurancePage />}
				/>
				<Route
					path={`${routes.CAR_INFORMATION}/:carId/${routes.INSURANCE}/:insuranceId?`}
					element={<InsurancePage />}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
