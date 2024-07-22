import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slice/filterSlice";
import productReducer from "./slice/productSlice";
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
