import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slice/filterSlice";
import productReducer from "./slice/productSlice";
import bagReducer from "./slice/cartSlice";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    product: productReducer,
    cart: bagReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
