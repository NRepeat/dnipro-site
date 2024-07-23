// store/filterSlice.js
import { PayloadAction, createSlice, original } from "@reduxjs/toolkit";

export type BagStateType = {
  isOpenModule: boolean;
  products: any[] | null;
  isBuyRightNowModalOpen: boolean;
  productsToBuy: any[] | null;
};
const initialState: BagStateType = {
  isOpenModule: false,
  isBuyRightNowModalOpen: false,
  products: null,
  productsToBuy: null,
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

    setIsBuyRightNowModalOpen: (
      state,
      action: PayloadAction<{ isOpen: boolean; product?: any }>
    ) => {
      state.isBuyRightNowModalOpen = action.payload.isOpen;
      state.productsToBuy =
        state.productsToBuy && action.payload.product
          ? [action.payload.product, ...state.productsToBuy]
          : [action.payload.product];
    },
  },
});

export const { setProductInBag, setIsModalOpen, setIsBuyRightNowModalOpen } =
  bagSlice.actions;

export default bagSlice.reducer;
