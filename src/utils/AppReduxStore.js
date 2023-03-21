import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const appReduxStore = configureStore({
    reducer: {
        cart: cartSlice
    }
});

export default appReduxStore;