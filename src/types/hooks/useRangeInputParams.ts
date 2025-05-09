import {
	ControllerRenderProps,
	FieldValues,
	Path,
	PathValue,
} from 'react-hook-form'

export type Params<
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
> = {
	min: number
	max: number
	field: ControllerRenderProps<TFieldValues, TName>
	defaultValue?: PathValue<TFieldValues, TName>
}
