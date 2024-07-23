import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slice/filterSlice";
import productReducer from "./slice/productSlice";
import bagReducer from "./slice/bagSlice";
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    product: productReducer,
    bag: bagReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
