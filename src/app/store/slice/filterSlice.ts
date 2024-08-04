import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FilterStateSetVariables = {
  brands: Set<string>;
  categories: Set<string>;
};
export type FilterStateType = {
  price: number[];
  isChanged: boolean;
  filterIsOpen: boolean;
  filterShouldStick: boolean;
  flipRef: Flip.FlipState | null;
  filterState: FilterStateSetVariables;
};
const initialState: FilterStateType = {
  price: [100, 300],
  isChanged: false,
  filterIsOpen: false,
  filterShouldStick: false,
  flipRef: null,
  filterState: {
    brands: new Set(),
    categories: new Set(),
  },
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
    setFilterState: (
      state,
      action: PayloadAction<Partial<FilterStateSetVariables>>
    ) => {
      const { brands, categories } = action.payload;
      if (brands !== undefined) {
        state.filterState.brands = toggleItem(state.filterState.brands, brands);
      }
      if (categories !== undefined) {
        state.filterState.categories = toggleItem(
          state.filterState.categories,
          categories
        );
      }
    },
  },
});
function toggleItem(set: Set<string>, items: Set<string> | null): Set<string> {
  const newSet = new Set(set);
  if (items) {
    items.forEach((item) => {
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
    });
  }
  return newSet;
}
export const {
  setPrice,
  setIsFilterChanged,
  setFilterShouldStick,
  setFilterIsOpen,
  setFlipState,
  setFilterState,
} = filterSlice.actions;

export default filterSlice.reducer;
