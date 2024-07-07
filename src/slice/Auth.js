import { createSlice } from "@reduxjs/toolkit";
import { setItemKey, setItemSign } from "../helpers/persistenceStorage";

const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
    error: null
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUserStart: (state, action) => {
            state.isLoading = true
        },
        signUserSuccess: (state, action) => {
            state.isLoading = false
            state.loggedIn = true
            state.user = action.payload
            setItemKey("key", action.payload.key)
            setItemSign("sign", action.payload.secret)
        },
        signUserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        logOutuser: (state) => {
            state.loggedIn = false
            state.user = null
        }
    }
})
export const { signUserStart, signUserSuccess, signUserFailure, logOutuser } = authSlice.actions
export default authSlice.reducer