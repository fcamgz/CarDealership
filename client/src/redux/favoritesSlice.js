import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        cars: [],
        quantity: 0,
    },
    reducers: {
        addCarToFavorites: (state, action) => {
            if(state.cars.filter(car => car._id === action.payload._id).length > 0){
                console.log('Car is already in favorites');
            } else{
                state.cars.push(action.payload);
                state.quantity += 1;
            }
        },
        removeCarFromFavorites: (state, action) => {
            if(state.quantity > 0)
                state.quantity -= 1;
            state.cars = state.cars.filter(car => car._id !== action.payload._id);
        },
    }
})

export const {addCarToFavorites, removeCarFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;