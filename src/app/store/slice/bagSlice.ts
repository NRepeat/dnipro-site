// store/filterSlice.js
import { PayloadAction, createSlice, original } from "@reduxjs/toolkit";

export type BagStateType = {
  isOpenModule: boolean;
  products: any[] | null;
  isBuyRightNowModalOpen: boolean;
};
const initialState: BagStateType = {
  isOpenModule: false,
  isBuyRightNowModalOpen: false,
  products: null,
};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpenModule = action.payload;
    },
    setProductInBag: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
    },

    setIsBuyRightNowModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isBuyRightNowModalOpen = action.payload;
    },
  },
});

export const { setProductInBag, setIsModalOpen, setIsBuyRightNowModalOpen } =
  bagSlice.actions;

export default bagSlice.reducer;
