import { ResetPasswordDto } from '../dto/ResetPasswordDto'

export type ResetPasswordMutationArgs = {
	dto: ResetPasswordDto
	resetToken: string
}
