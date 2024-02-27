import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/productsSlice.js';
import singleProductReducer from "../features/singleProductSlice.js";
import filtersSlice from "../features/filtersSlice.js";
import cartSlice from "../features/cartSlice.js";
import  authenticationSlice  from "../features/authenticationSlice.js";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        singleProduct: singleProductReducer,
        filterProducts: filtersSlice,
        cart: cartSlice,
        authentication: authenticationSlice
    }
});
