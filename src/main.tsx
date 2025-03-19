import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import Layout from './components/Layout'
import ToasterWrapper from './components/ToasterWrapper/ToasterWrapper.tsx'
import { queryClient } from './config/queryClient'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<StrictMode>
			<BrowserRouter>
				<Layout>
					<ToasterWrapper />
					<App />
				</Layout>
			</BrowserRouter>
		</StrictMode>
	</QueryClientProvider>
)
