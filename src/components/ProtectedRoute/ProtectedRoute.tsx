import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { routes } from '@/config/routes'

import { useAuthStore } from '@/store/useAuthStore'

const ProtectedRoute: FC = () => {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

	return isLoggedIn ? <Outlet /> : <Navigate to={routes.AUTH} replace />
}

export default ProtectedRoute
