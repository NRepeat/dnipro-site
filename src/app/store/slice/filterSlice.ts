import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FilterStateSetVariables = {
  brands: Set<string>;
  categories: Set<string>;
};
export type PriseRangeState = {
  priceFrom?: number;
  priceTo?: number;
};

export type FilterStateType = {
  price: PriseRangeState;
  isChanged: boolean;
  filterIsOpen: boolean;
  filterShouldStick: boolean;
  flipRef: Flip.FlipState | null;
  selected: Set<string>;
};
const initialState: FilterStateType = {
  price: {},
  isChanged: false,
  filterIsOpen: false,
  filterShouldStick: false,
  flipRef: null,
  selected: new Set(),
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<{ [x: string]: number }>) => {
      state.price = { ...state.price, ...action.payload };
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
    setFilterState: (state, action: PayloadAction<Set<string>>) => {
      state.selected = action.payload;
    },
  },
});

export const {
  setPrice,
  setIsFilterChanged,
  setFilterShouldStick,
  setFilterIsOpen,
  setFlipState,
  setFilterState,
} = filterSlice.actions;

export default filterSlice.reducer;
