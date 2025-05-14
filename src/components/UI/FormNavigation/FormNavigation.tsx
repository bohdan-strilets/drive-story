import { FC } from 'react'

import { FormNavigationProps } from '@/types/props/UI/FormNavigationProps'

import Button from '../Button'

import { Item, List } from './FormNavigation.styled'

const FormNavigation: FC<FormNavigationProps> = ({
	onPrev,
	onNext,
	isFirst,
	isLast,
	isLoading,
	mode,
}) => {
	return (
		<List>
			<Item>
				<Button
					type="button"
					width="100%"
					margin="0 30px 0 0"
					onClick={onPrev}
					disabled={isFirst}
					color="white"
					background="black"
					hoverColor="black"
					hoverBackground="yellow"
				>
					Prev
				</Button>
			</Item>
			<Item>
				{!isLast ? (
					<Button
						type="button"
						width="100%"
						onClick={(e) => onNext(e)}
						color="white"
						background="black"
						hoverColor="black"
						hoverBackground="yellow"
					>
						Next
					</Button>
				) : (
					<Button
						type="submit"
						width="100%"
						color="white"
						background="black"
						hoverColor="black"
						hoverBackground="yellow"
						disabled={isLoading}
					>
						{isLoading ? '...' : mode === 'create' ? 'create' : 'save'}
					</Button>
				)}
			</Item>
		</List>
	)
}

export default FormNavigation
