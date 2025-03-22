import { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routes } from './config/routes'
import { useGetCurrentUser } from './hooks/user/useGetCurrentUser'
import ActivationSuccessPage from './pages/ActivationSuccessPage'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import RecoverPasswordPage from './pages/RecoverPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import { useAuthStore } from './store/useAuthStore'

const App: FC = () => {
	const token = useAuthStore((state) => state.token)
	const { mutateAsync: getCurrentUser } = useGetCurrentUser()

	useEffect(() => {
		if (token) getCurrentUser()
	}, [getCurrentUser, token])

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
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
