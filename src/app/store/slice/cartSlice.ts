import { getCartDetails } from "@/app/lib/get-cart-details";
import cartAPIactions from "@/app/services/cart";
import { CartDto, CartItemDto } from "@/app/services/dto/cart";
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  original,
} from "@reduxjs/toolkit";
import cartThunk from "../thunk/cartThunk";

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string[];
  price: number;
};
type CreateCatItemValues = {};

export type CartStateType = {
  loading: boolean;
  cartItemsLoading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];
};
const initialState: CartStateType = {
  error: false,
  items: [],
  loading: false,
  cartItemsLoading: false,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItemsLoading: (
      state,
      action: PayloadAction<{ cartItemsLoading: boolean }>
    ) => {
      state.cartItemsLoading = action.payload.cartItemsLoading;
    },
    setCartLoading: (
      state,
      action: PayloadAction<{ cartLoading: boolean }>
    ) => {
      state.loading = action.payload.cartLoading;
    },
  },
  extraReducers: cartThunk.extraReducers,
});

export const { setCartLoading, setCartItemsLoading } = cartSlice.actions;

export default cartSlice.reducer;
