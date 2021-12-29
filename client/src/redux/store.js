import {configureStore, combineReducers} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const rootReducer = combineReducers({car: cartSlice});

const store = configureStore({
    reducer: rootReducer
})

export default store;

