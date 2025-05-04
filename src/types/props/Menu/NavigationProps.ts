export type NavigationProps = {
	closeMenu: () => void
	margin?: string
	itemHeight?: string
}

export type ListProps = Pick<NavigationProps, 'margin'>

export type ItemProps = Pick<NavigationProps, 'itemHeight'>
