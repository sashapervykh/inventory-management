export interface UserCreationDto {
  firstName?: string | undefined;
  lastName?: string | undefined;
  email: string;
  passwordHash: string;
}
