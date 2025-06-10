import { FC, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loader from './components/UI/Loader'
import { routes } from './config/routes'
import { useGetCurrentUser } from './hooks/user/useGetCurrentUser'
import { useAuthStore } from './store/useAuthStore'

const HomePage = lazy(() => import('./pages/HomePage'))
const AuthPage = lazy(() => import('./pages/AuthPage'))
const CarInfoPage = lazy(() => import('./pages/CarInfoPage'))
const GaragePage = lazy(() => import('./pages/GaragePage'))
const InspectionPage = lazy(() => import('./pages/InspectionPage'))
const InsurancePage = lazy(() => import('./pages/InsurancePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const PhoneBookPage = lazy(() => import('./pages/PhoneBookPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage'))
const RecoverPasswordPage = lazy(() => import('./pages/RecoverPasswordPage'))
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'))
const ContactInfoPage = lazy(() => import('./pages/ContactInfoPage'))
const ActivationSuccessPage = lazy(
	() => import('./pages/ActivationSuccessPage')
)

const App: FC = () => {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
	const { isLoading } = useGetCurrentUser(isLoggedIn)

	if (isLoading) return <Loader color="gray" />

	return (
		<Suspense fallback={<Loader color="gray" />}>
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
				<Route path={routes.PHONE_BOOK} element={<PhoneBookPage />} />
				<Route path={routes.CONTACT_BY_ID} element={<ContactInfoPage />} />
				<Route path={routes.CAR_BY_ID} element={<CarInfoPage />} />
				<Route path={routes.INSURANCE_BY_ID} element={<InsurancePage />} />
				<Route path={routes.INSPECTION_BY_ID} element={<InspectionPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	)
}

export default App
