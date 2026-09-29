import { IUser } from "@/src/components/shared/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface UserState {
  user: IUser | null;
}

const initialState: UserState = {
  user: null,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>)=> {
            state.user = action.payload;
        }
    }
})

export default userSlice.reducer;