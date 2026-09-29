import { IsActive, IUser, Role } from "@/src/components/shared/types";
import { baseApi } from "../baseApi";

interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
}

interface UpdateUserPayload {
  name?: string;
  phone?: string;
  address?: string;
  picture?: string;
  isDeleted?: boolean;
    isActive?: IsActive;
    isVerified?: boolean;
    role: Role;
}
interface UpdateUserRequest {
  userId: string;
  data: UpdateUserPayload;
}
interface UserResponse {
  success: boolean;
  message: string;
  data: IUser;
}

interface UsersResponse {
  success: boolean;
  message: string;
  data: IUser[];
}

interface DeleteUserResponse {
  success: boolean;
  message: string;
}

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersResponse, void>({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    getSingleUser: builder.query<UserResponse, string>({
      query: (slug) => ({
        url: `/user/${slug}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    getMyProfile: builder.query<UserResponse, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    createUser: builder.mutation<UserResponse, CreateUserPayload>({
      query: (data) => ({
        url: "/user/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    updateUser: builder.mutation<UserResponse, UpdateUserRequest>({
  query: ({ userId, data }) => ({
    url: `/user/${userId}`,
    method: "PATCH",
    body: data,
  }),
  invalidatesTags: ["User"],
}),

    deleteUser: builder.mutation<DeleteUserResponse, string>({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useGetMyProfileQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;