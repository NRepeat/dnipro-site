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
export const fetchCart = createAsyncThunk<CartDto>(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    const response = await cartAPIactions.fetchCart();
    return response.data.cart;
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartItems: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      const { items, totalAmount } = getCartDetails(action.payload);
      state.items = items;
      state.totalAmount = totalAmount;
      state.loading = false;
      console.log("🚀 ~ builder.addCase ~  state:", state);
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.error = true;
    });
    builder.addCase(fetchCart.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
