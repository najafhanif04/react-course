import { configureStore } from "@reduxjs/toolkit";
import createSlice from "./addToCart/cartslice"

export default configureStore({
    reducer: {
        cart: createSlice,
    },
})