// store/filterSlice.js
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FilterStateType = {
  price: number[];
  isChanged: boolean;
};
const initialState: FilterStateType = {
  price: [100, 1000],
  isChanged: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<number[]>) => {
      state.price = action.payload;
      state.isChanged = true;
    },
    setIsFilterChanged: (state, action: PayloadAction<boolean>) => {
      state.isChanged = action.payload;
    },
  },
});

export const { setPrice, setIsFilterChanged } = filterSlice.actions;

export default filterSlice.reducer;
