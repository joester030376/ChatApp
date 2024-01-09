import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false,    
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
        signOut(state, action) {
            state.isLoggedIn = false;
            state.token = false;
        }
    }
});

// Reducer
export default slice.reducer;

// Log in
export function LoginUser(formValues) {
    // formValues => {email, password}
    return async (dispatch, getState) => {
        await axios
            .post("/auth/login", 
            {
            ...formValues,
            }, 
            {
                headers: {
                    "Content-Type": "application/json", 
                },
            }
        ).then(function (response) {
            console.log(response);

            dispatch(slice.actions.logIn({
                isLoggedIn: true,
                token: response.data.token,
            }));


        }).catch(function(error) {
            console.log(error);
        });
    };
}

// Sign out
export function LogoutUser() {
    return async (dispatch, getState) => {
        dispatch(slice.actions.signOut());
    };
}