// store/filterSlice.js
import { PayloadAction, createSlice, original } from "@reduxjs/toolkit";

export type ProductStateType = {
  favorite: boolean;
  color: string;
  size: number | string;
  id: number | null;
};
const initialState: ProductStateType = {
  favorite: false,
  color: "",
  size: "",
  id: null,
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
    setProductId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setFavorite, setColor, setSize, setProductId } =
  productSlice.actions;

export default productSlice.reducer;
