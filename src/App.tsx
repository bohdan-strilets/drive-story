import { AnimatePresence } from 'motion/react'
import { FC, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Modal from './components/Modal'
import Loader from './components/UI/Loader'
import { modalNames } from './config/modalConfig'
import { routes } from './config/routes'
import { useLogout } from './hooks/auth/useLogout'
import useModal from './hooks/ui/useModal'
import useSubmit from './hooks/ui/useSubmit'
import { useGetCurrentUser } from './hooks/user/useGetCurrentUser'
import { useAuthStore } from './store/useAuthStore'
import { AuthResponse } from './types/types/AuthResponse'

const HomePage = lazy(() => import('./pages/HomePage'))
const AuthPage = lazy(() => import('./pages/AuthPage'))
const CarPage = lazy(() => import('./pages/CarPage'))
const GaragePage = lazy(() => import('./pages/GaragePage'))
const InspectionPage = lazy(() => import('./pages/InspectionPage'))
const InsurancePage = lazy(() => import('./pages/InsurancePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const PhoneBookPage = lazy(() => import('./pages/PhoneBookPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage'))
const RecoverPasswordPage = lazy(() => import('./pages/RecoverPasswordPage'))
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const FuelStationPage = lazy(() => import('./pages/FuelStationPage'))
const RefuelingPage = lazy(() => import('./pages/RefuelingPage'))
const ActivationSuccessPage = lazy(
	() => import('./pages/ActivationSuccessPage')
)

const App: FC = () => {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
	const { isLoading } = useGetCurrentUser(isLoggedIn)

	const { checkQueryParam, onClose } = useModal()

	const { mutateAsync: logout, isPending } = useLogout()
	const logoutAndNavigate = useSubmit<AuthResponse | null>({
		callback: logout,
		navigateTo: routes.AUTH,
	})

	if (isLoading) return <Loader color="gray" />

	return (
		<>
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
					<Route path={routes.CONTACT_BY_ID} element={<ContactPage />} />
					<Route path={routes.CAR_BY_ID} element={<CarPage />} />
					<Route path={routes.INSURANCE_BY_ID} element={<InsurancePage />} />
					<Route path={routes.INSPECTION_BY_ID} element={<InspectionPage />} />
					<Route path={routes.REFUELING_BY_CAR} element={<FuelStationPage />} />
					<Route path={routes.REFUELING_BY_ID} element={<RefuelingPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>

			<AnimatePresence>
				{checkQueryParam(modalNames.EXIT_PROFILE) && (
					<Modal
						key={modalNames.EXIT_PROFILE}
						title="Logout from profile?"
						isDialog={true}
						isLoading={isPending}
						negativeBtnLabel="no"
						positiveBtnLabel="yes"
						negativeCallback={onClose}
						positiveCallback={logoutAndNavigate}
					>
						<p>Do you want to log out of your current account?</p>
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default App
