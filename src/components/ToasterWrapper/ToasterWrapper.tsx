import { FC } from 'react'
import { Toaster } from 'react-hot-toast'

import { toastConfig } from '@/config/toastConfig'

const ToasterWrapper: FC = () => {
	return (
		<Toaster
			position="top-right"
			reverseOrder={false}
			gutter={8}
			containerStyle={{ zIndex: 9999 }}
			toastOptions={toastConfig}
		/>
	)
}

export default ToasterWrapper
