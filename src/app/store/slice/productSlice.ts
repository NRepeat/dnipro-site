// store/filterSlice.js
import { PayloadAction, createSlice, original } from "@reduxjs/toolkit";

export type ProductStateType = {
  favorite: boolean;
  color: string;
  size: number | string;
};
const initialState: ProductStateType = {
  favorite: false,
  color: "",
  size: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<boolean>) => {
      state.favorite = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setSize: (state, action: PayloadAction<string | number>) => {
      state.size = action.payload;
    },
  },
});

export const { setFavorite, setColor, setSize } = productSlice.actions;

export default productSlice.reducer;