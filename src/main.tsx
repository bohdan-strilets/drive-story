import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import Layout from './components/Layout'
import { queryClient } from './config/queryClient.ts'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Layout>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</Layout>
		</BrowserRouter>
	</StrictMode>
)
