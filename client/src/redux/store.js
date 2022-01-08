import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import favoritesSlice from './favoritesSlice';

const store = configureStore({
    reducer: {
        favorites: favoritesSlice,
        user: authSlice,
    }
})

export default store;

