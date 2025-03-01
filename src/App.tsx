import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routes } from './config/routes'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const App: FC = () => {
	return (
		<Routes>
			<Route path={routes.HOME} element={<HomePage />} />
			<Route path={routes.AUTH} element={<AuthPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	)
}

export default App
