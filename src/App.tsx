import { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routes } from './config/routes'
import { useGetCurrentUser } from './hooks/user/useGetCurrentUser'
import ActivationSuccessPage from './pages/ActivationSuccessPage'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import RecoverPasswordPage from './pages/RecoverPasswordPage'
import { useAuthStore } from './store/useAuthStore'

const App: FC = () => {
	const token = useAuthStore((state) => state.token)
	const { mutateAsync: getCurrentUser, isPending } = useGetCurrentUser()

	useEffect(() => {
		if (token) getCurrentUser()
	}, [getCurrentUser, token])

	return (
		<Routes>
			<Route path={routes.HOME} element={<HomePage />} />
			<Route path={routes.AUTH} element={<AuthPage />} />
			<Route
				path={routes.RECCOVER_PASSWORD}
				element={<RecoverPasswordPage />}
			/>
			<Route
				path={routes.ACTIVATION_SUCCESS}
				element={<ActivationSuccessPage />}
			/>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	)
}

export default App
