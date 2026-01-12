import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Reducers/userSlice";
import productSlice from "./Reducers/productSlice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice
  },
});
