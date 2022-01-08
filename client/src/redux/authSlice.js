import { createSlice } from "@reduxjs/toolkit"; 
import axios from 'axios';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loggedIn: false
    },
    reducers: {
        login: (state, action) => {
            axios.post('http://localhost:5000/api/auth/login', {username: action.payload.username, password: action.payload.password})
            .then(res => res.data)
            .then(res => res.username ? (state.loggedIn = true) (state.user = res) : (state.loggedIn = false))
            .catch(err => console.log(err));
        },
    }
});

export const {login} = authSlice.actions;
export default authSlice.reducer;