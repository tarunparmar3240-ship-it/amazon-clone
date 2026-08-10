import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice/authSlice";
import addressReducer from "../features/address/addressSlice";
import categoryReducer from '../features/categorySlice/categorySlice';
import productReducer from '../features/ProductSlice/ProductSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    addr: addressReducer,
    category: categoryReducer,
    product: productReducer,
  },
});
