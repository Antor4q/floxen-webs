import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./auth/userSlice";
import authReducer from "./auth/authSlice";
import { baseApi } from "./baseApi";


export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;