import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Reducers/userSlice";
import productSlice from "./Reducers/productSlice"
import productDetailsSlice from "./Reducers/productDetailSlice"
import cartSlice from "./Reducers/cartSlice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
    productDetail: productDetailsSlice,
    cart: cartSlice
  },
});
