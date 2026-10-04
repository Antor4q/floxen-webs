export type Role = "SUPER_ADMIN" | "ADMIN" | "USER";

export type IsActive = "ACTIVE" | "INACTIVE" | "BLOCKED";

export interface IAuthProvider {
  provider: "google" | "credentials";
  providerId: string;
}

export enum IPlan {
  FREE = "FREE",
  PREMIUM = "PREMIUM",
}
export interface IUser {
  _id?: string;
  name: string;
  email: string;
  plan: IPlan;
  password?:string;
  authProvider?: "google"|"credentials";
  slug?: string;
  
  picture?: string;
  isDeleted?: boolean;
  isActive?: IsActive;
  isVerified?: boolean;
  role: Role;
  auths: IAuthProvider[];
}