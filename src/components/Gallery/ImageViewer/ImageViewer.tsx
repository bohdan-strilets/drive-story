import { FC, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaPause, FaPlay } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { SlSizeActual } from 'react-icons/sl'

import Backdrop from '@/components/UI/Backdrop'
import Button from '@/components/UI/Button'
import Paragraph from '@/components/UI/Paragraph'

import useResponsive from '@/hooks/ui/useResponsive'

import { defaultImages } from '@/utils/defaultImages'

import { ImageViewerProps } from '@/types/props/Gallery/ImageViewerProps'

import { floating } from '@/animations/floating'

import { Counter, FooterBar, Image, TimerDisplay } from './ImageViewer.styled'

const imageViewerPortal = document.getElementById(
	'image-viewer'
) as HTMLDivElement

const ImageViewer: FC<ImageViewerProps> = ({
	imageUrl,
	closeViewer,
	imageUrls,
}) => {
	const [currentUrl, setCurrentUrl] = useState<null | string>(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isPlaying, setIsPlaying] = useState(false)

	const SLIDE_DURATION = 3
	const SWIPE_THRESHOLD = 50

	const [timeLeft, setTimeLeft] = useState(SLIDE_DURATION)

	const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null)
	const touchStartXRef = useRef<number | null>(null)
	const touchEndXRef = useRef<number | null>(null)

	const { minTablet } = useResponsive()

	useEffect(() => {
		const index = imageUrls.findIndex((item) => item === imageUrl)

		setCurrentUrl(imageUrl)
		setCurrentIndex(index)

		setTimeLeft(SLIDE_DURATION)
	}, [imageUrl, imageUrls])

	useEffect(() => {
		setCurrentUrl(imageUrls[currentIndex] ?? null)
	}, [currentIndex, imageUrls])

	const handleNextImage = () => {
		setCurrentIndex((prev) => {
			const next = prev < imageUrls.length - 1 ? prev + 1 : 0
			return next
		})
		setTimeLeft(SLIDE_DURATION)
	}

	const handlePrevImage = () => {
		setCurrentIndex((prev) => {
			const prevIdx = prev > 0 ? prev - 1 : imageUrls.length - 1
			return prevIdx
		})
		setTimeLeft(SLIDE_DURATION)
	}

	const togglePlayPause = () => setIsPlaying((prev) => !prev)

	useEffect(() => {
		if (isPlaying) {
			if (countdownIntervalRef.current) {
				clearInterval(countdownIntervalRef.current)
			}
			setTimeLeft(SLIDE_DURATION)

			countdownIntervalRef.current = setInterval(() => {
				setTimeLeft((prev) => {
					if (prev === 0) {
						setCurrentIndex((idx) => (idx < imageUrls.length - 1 ? idx + 1 : 0))
						return SLIDE_DURATION
					}
					return prev - 1
				})
			}, 1000)
		} else {
			if (countdownIntervalRef.current) {
				clearInterval(countdownIntervalRef.current)
				countdownIntervalRef.current = null
			}
			setTimeLeft(SLIDE_DURATION)
		}

		return () => {
			if (countdownIntervalRef.current) {
				clearInterval(countdownIntervalRef.current)
				countdownIntervalRef.current = null
			}
		}
	}, [isPlaying, imageUrls.length])

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartXRef.current = e.changedTouches[0].clientX
	}

	const handleTouchEnd = (e: React.TouchEvent) => {
		touchEndXRef.current = e.changedTouches[0].clientX

		if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
			const deltaX = touchEndXRef.current - touchStartXRef.current

			if (deltaX > SWIPE_THRESHOLD) {
				handlePrevImage()
			} else if (deltaX < -SWIPE_THRESHOLD) {
				handleNextImage()
			}
		}

		touchStartXRef.current = null
		touchEndXRef.current = null
	}

	return createPortal(
		<Backdrop onClose={closeViewer}>
			<Button
				onClick={closeViewer}
				color="white"
				background="gray"
				hoverColor="black"
				hoverBackground="yellow"
				width="40px"
				height="40px"
				style={{
					position: 'absolute',
					top: 15,
					right: 15,
					zIndex: 99,
				}}
			>
				<SlSizeActual />
			</Button>

			<Image
				key={currentUrl}
				src={currentUrl ?? defaultImages.photo}
				alt="Selected image"
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				width="100%"
				height="100%"
				{...floating()}
			/>

			{imageUrls.length > 1 && (
				<FooterBar>
					<Button
						onClick={handlePrevImage}
						color="white"
						background="gray"
						hoverColor="black"
						hoverBackground="yellow"
						width={minTablet ? '120px' : '30px'}
						height={minTablet ? '40px' : '30px'}
						disabled={isPlaying}
					>
						<IoIosArrowBack />
					</Button>

					<Counter>
						<Paragraph color="white" fontWeight={600}>
							{currentIndex + 1}
						</Paragraph>
						<Paragraph color="white" fontWeight={600} margin="0 15px">
							/
						</Paragraph>
						<Paragraph color="yellow" fontWeight={600}>
							{imageUrls.length}
						</Paragraph>
					</Counter>

					<Button
						onClick={handleNextImage}
						color="white"
						background="gray"
						hoverColor="black"
						hoverBackground="yellow"
						width={minTablet ? '120px' : '30px'}
						height={minTablet ? '40px' : '30px'}
						disabled={isPlaying}
					>
						<IoIosArrowForward />
					</Button>

					<Button
						onClick={togglePlayPause}
						color="white"
						background="gray"
						hoverColor="black"
						hoverBackground="yellow"
						width={minTablet ? '40px' : '30px'}
						height={minTablet ? '40px' : '30px'}
						margin="0 0 0 15px"
					>
						{isPlaying ? <FaPause /> : <FaPlay />}
					</Button>

					{isPlaying && (
						<TimerDisplay slideDuration={SLIDE_DURATION}>
							<Paragraph
								color="white"
								fontWeight={600}
							>{`0${timeLeft}`}</Paragraph>
						</TimerDisplay>
					)}
				</FooterBar>
			)}
		</Backdrop>,
		imageViewerPortal
	)
}

export default ImageViewer
