import { useRef, useState } from 'react'

import { Params, Result } from '@/types/hooks/useUploadFileParams'
import { FileInformation } from '@/types/types/FileInformation'
import { Image } from '@/types/types/Image'

import useSubmit from './useSubmit'

const useUploadFile = ({ fileName, callback }: Params): Result => {
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

	const submitUploadImage = useSubmit<Image | null, FormData>({
		callback,
		successMessage: 'Image uploaded successfully',
		isCloseModal: true,
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const fileInput = hiddenFileInput.current?.files?.[0]

		if (fileInput) {
			const formData = new FormData()
			formData.append(fileName, fileInput)
			submitUploadImage(formData)
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
