import { getCartDetails } from "@/app/lib/get-cart-details";
import cartAPIactions from "@/app/services/cart";
import { CartDto, CartItemDto } from "@/app/services/dto/cart";
import { FullProduct } from "@/app/services/products";
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
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];
};
const initialState: CartStateType = {
  error: false,
  items: [],
  loading: false,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: cartThunk.extraReducers,
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
