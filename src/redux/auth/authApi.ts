import { baseApi } from "../baseApi";

interface LoginPayload {
  email: string;
  password: string;
}

interface ForgotPasswordPayload {
  email: string;
}

interface ResetPasswordPayload {
  token: string;
  password: string;
}

interface SetPasswordPayload {
 
  password: string;
}

interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

interface AuthResponse {
  success: boolean;
  message: string;
}

type LoginResponse = AuthResponse;
type LogoutResponse = AuthResponse;
type ForgotPasswordResponse = AuthResponse;
type ResetPasswordResponse = AuthResponse;
type SetPasswordResponse = AuthResponse;
type ChangePasswordResponse = AuthResponse;

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),

    forgotPassword: builder.mutation<ForgotPasswordResponse,ForgotPasswordPayload>({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation<ResetPasswordResponse,ResetPasswordPayload>({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),

    setPassword: builder.mutation<SetPasswordResponse, SetPasswordPayload>({
      query: (data) => ({
        url: "/auth/set-password",
        method: "POST",
        body: data,
      }),
    }),

    changePassword: builder.mutation<ChangePasswordResponse,ChangePasswordPayload>({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
  }),

  overrideExisting: false,
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useSetPasswordMutation,
  useChangePasswordMutation,
} = authApi;

export default authApi;