import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cars: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addCar: (state, action) => {
            state.quantity += 1;
            state.cars.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        }
    }
})

export const {addCar} = cartSlice.actions;
export default cartSlice.reducer;