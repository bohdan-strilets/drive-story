import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import Layout from './components/Layout'
import ToasterWrapper from './components/ToasterWrapper/ToasterWrapper.tsx'
import { queryClient } from './config/queryClient'
import './styles/index.css'

const VITE_GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY as string

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<StrictMode>
			<BrowserRouter>
				<Layout>
					<GoogleOAuthProvider clientId={VITE_GOOGLE_API_KEY}>
						<ToasterWrapper />
						<App />
					</GoogleOAuthProvider>
				</Layout>
			</BrowserRouter>
		</StrictMode>
	</QueryClientProvider>
)
