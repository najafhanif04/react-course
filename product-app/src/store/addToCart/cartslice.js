import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const addToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.product.push(action.payload);
      localStorage.setItem("cart", state.product);
      //   console.log(state.product)
    },
    // increaseQuantity: (state, action) => {
    //   state.product.push(action.payload);
    // },
  },
});

export const { addToCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
