// store/filterSlice.js
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FilterStateType = {
  filter: any[];
  price: number[];
};
const initialState: FilterStateType = {
  filter: [""],
  price: [100, 1000],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string[]>) => {
      state.filter = action.payload;
    },

    setPrice: (state, action: PayloadAction<number[]>) => {
      state.price = action.payload;
    },
  },
});

export const { setFilter, setPrice } = filterSlice.actions;

export default filterSlice.reducer;
