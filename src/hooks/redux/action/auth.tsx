import { Auth_respone_type } from "@/model/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    is_Login: false,
    Access_Token: "",
    User_Name: "",
    Avatar: "",
} as Auth_respone_type


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => initialState,
        login: (state, action: PayloadAction<Auth_respone_type>) => {
            return state = action.payload
        },
        signup: (state, action: PayloadAction<Auth_respone_type>) => {
            return state = action.payload
        },
    },
});

export const { login, logout, signup } = authSlice.actions
export default authSlice.reducer