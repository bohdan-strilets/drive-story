import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routes } from './config/routes'
import ActivationSuccessPage from './pages/ActivationSuccessPage'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import RecoverPasswordPage from './pages/RecoverPasswordPage'

const App: FC = () => {
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
