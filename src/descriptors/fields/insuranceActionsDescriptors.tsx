import { MdContactEmergency, MdDelete, MdModeEdit } from 'react-icons/md'

import { ActionContext, ActionDescriptor } from '@/types/types/ActionDescriptor'

export const insuranceActionsDescriptors: ActionDescriptor<ActionContext>[] = [
	{
		key: 'edit-insurance',
		label: 'Edit insurance',
		icon: <MdModeEdit size={20} />,
		getCallback: () => () => null,
	},
	{
		key: 'bind-contact',
		label: 'Bind contact',
		icon: <MdContactEmergency size={20} />,
		getCallback: () => () => null,
	},
	{
		key: 'delete-insurance',
		label: 'Delete insurance',
		icon: <MdDelete size={20} />,
		getCallback: () => () => null,
	},
]
