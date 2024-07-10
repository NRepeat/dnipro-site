import { configureStore } from "@reduxjs/toolkit";
import filterReducer, { setFlipState } from "./slice/filterSlice";
export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
