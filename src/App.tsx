import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routes } from './config/routes'
import HomePage from './pages/HomePage'

const App: FC = () => {
	return (
		<Routes>
			<Route path={routes.HOME} element={<HomePage />} />
		</Routes>
	)
}

export default App
