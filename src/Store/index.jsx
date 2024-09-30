import productsReducer from "./Slices/productsSlice";
import cartReducer from "./Slices/cartSlice";
import wishListReducer from "./Slices/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
});
