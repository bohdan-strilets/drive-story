import { useRef, useState } from 'react'
import toast from 'react-hot-toast'

import { useUploadFileParams } from '@/types/hooks/useUploadFileParams'
import { FileInformation } from '@/types/types/FileInformation'

const useUploadFile = ({
	fileName,
	callback,
	handleCloseModal,
}: useUploadFileParams) => {
	const hiddenFileInput = useRef<HTMLInputElement>(null)
	const [previewSource, setPreviewSource] = useState('')
	const [fileInfo, setFileInfo] = useState<FileInformation | null>(null)

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return

		setFileInfo({ name: file.name, size: file.size })

		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = () => setPreviewSource(reader.result as string)
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const fileInput = hiddenFileInput.current?.files?.[0]

		if (fileInput) {
			const formData = new FormData()
			formData.append(fileName, fileInput)

			const response = await callback(formData)

			if (!response.success) {
				toast.error(
					response.message || 'Something went wrong, please try again'
				)
				return
			}

			handleCloseModal()
			toast.success('Image uploaded successfully')
		}
	}

	const triggerFileInput = () => hiddenFileInput.current?.click()

	return {
		previewSource,
		triggerFileInput,
		handleFileChange,
		handleSubmit,
		hiddenFileInput,
		fileInfo,
	}
}

export default useUploadFile
