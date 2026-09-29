"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetMyProfileQuery } from "./userApi";
import { clearUser, setUser } from "./userSlice";
import { setAuthenticated } from "./authSlice";



const AuthInitializer = () => {
  const dispatch = useDispatch();

  const {
    data,
    isSuccess,
    isError,
  } = useGetMyProfileQuery();

  useEffect(() => {
    if (isSuccess && data?.data) {
      console.log("SETTING USER TO REDUX:", data.data);

      dispatch(setUser(data.data));
      dispatch(setAuthenticated(true));
    }

    if (isError) {
      dispatch(clearUser());
      dispatch(setAuthenticated(false));
    }
  }, [data, isSuccess, isError, dispatch]);

  return null;
};

export default AuthInitializer;