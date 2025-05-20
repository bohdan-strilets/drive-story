import { ResetPasswordDto } from '../dto/ResetPasswordDto'

export type ResetPasswordParams = {
	payload: ResetPasswordDto
	resetToken: string
}
