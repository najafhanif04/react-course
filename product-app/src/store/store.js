import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./addToCart/cartslice";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
