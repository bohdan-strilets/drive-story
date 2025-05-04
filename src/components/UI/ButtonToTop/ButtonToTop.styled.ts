import styled from '@emotion/styled'

export const Wrapper = styled.div<{ visible: boolean }>`
	position: fixed;
	bottom: 15px;
	right: 15px;
	z-index: 999;

	opacity: ${({ visible }) => (visible ? 1 : 0)};
	transform: translateY(${({ visible }) => (visible ? '0' : '20px')});
	pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};

	transition:
		opacity var(--hover-effect),
		transform var(--hover-effect);
`
