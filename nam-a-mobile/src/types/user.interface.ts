import { Role, UserStatus } from './enums';

export interface User {
  id: string;
  username?: string;
  email?: string;
  fullName?: string;
  passwordHash: Uint8Array;
  passwordSalt: Uint8Array;
  role: Role;
  dateOfBirth: Date;
  phoneNumber?: string;
  activationToken?: string;
  activationTokenExpires?: Date;
  resetToken?: string;
  resetTokenExpires?: Date;
  isEmailConfirmed: boolean;
  profilePictureUrl?: string;
  status?: UserStatus;
} 