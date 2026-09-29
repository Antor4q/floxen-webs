export type Role = "SUPER_ADMIN" | "ADMIN" | "USER";

export type IsActive = "ACTIVE" | "INACTIVE" | "BLOCKED";

export interface IAuthProvider {
  provider: "google" | "credentials";
  providerId: string;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  slug?: string;
  phone?: string;
  address?: string;
  picture?: string;
  isDeleted?: boolean;
  isActive?: IsActive;
  isVerified?: boolean;
  role: Role;
  auths: IAuthProvider[];
}