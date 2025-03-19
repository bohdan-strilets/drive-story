import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import Layout from './components/Layout'
import { queryClient } from './config/queryClient'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<StrictMode>
			<BrowserRouter>
				<Layout>
					<Toaster />
					<App />
				</Layout>
			</BrowserRouter>
		</StrictMode>
	</QueryClientProvider>
)
