import {
	ControllerRenderProps,
	FieldValues,
	Path,
	PathValue,
} from 'react-hook-form'

export type useRangeInputParams<T extends FieldValues> = {
	min: number
	max: number
	field: ControllerRenderProps<T, Path<T>>
	defaultValue?: PathValue<T, Path<T>>
}
