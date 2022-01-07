import { createSlice } from "@reduxjs/toolkit"; 

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loggedIn: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.loggedIn = true;
        }
    }
});

export const {login} = authSlice.actions;
export default authSlice.reducer;