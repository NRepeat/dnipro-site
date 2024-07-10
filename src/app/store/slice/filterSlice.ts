// store/filterSlice.js
import { PayloadAction, createSlice, original } from "@reduxjs/toolkit";
import { Flip } from "gsap/all";

export type FilterStateType = {
  price: number[];
  isChanged: boolean;
  filterIsOpen: boolean;
  filterShouldStick: boolean;
  flipRef: Flip.FlipState | null;
};
const initialState: FilterStateType = {
  price: [100, 1000],
  isChanged: false,
  filterIsOpen: false,
  filterShouldStick: false,
  flipRef: null,
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
    setFilterIsOpen: (state, action: PayloadAction<boolean>) => {
      state.filterIsOpen = action.payload;
    },
    setFilterShouldStick: (state, action: PayloadAction<boolean>) => {
      state.filterShouldStick = action.payload;
    },
    setFlipState: (state, action: PayloadAction<Flip.FlipState>) => {
      //@ts-ignore
      state.flipRef = action.payload;
    },
  },
});

export const {
  setPrice,
  setIsFilterChanged,
  setFilterShouldStick,
  setFilterIsOpen,
  setFlipState,
} = filterSlice.actions;

export default filterSlice.reducer;
