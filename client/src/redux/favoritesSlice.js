import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        cars: [],
        quantity: 0,
    },
    reducers: {
        addCarToFavorites: (state, action) => {
            state.quantity += 1;
            state.cars.push(action.payload);
        },
        removeCarFromFavorites: (state, action) => {
            state.quantity -= 1;
            state.cars.filter(car => car._id === action.payload._id);
        },
    }
})

export const {addCarToFavorites, removeCarFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;