import { getCartDetails } from "@/app/lib/get-cart-details";
import cartAPIactions from "@/app/services/cart";
import { CartDto } from "@/app/services/dto/cart";
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

export type BagStateType = {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];
};
const initialState: BagStateType = {
  error: false,
  items: [],
  loading: false,
  totalAmount: 0,
};
export const fetchCart = createAsyncThunk<{ items: CartDto }, { state: any }>(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    const response = await cartAPIactions.fetchCart();
    console.log("🚀 ~ response:", response);
    return { items: response.data.items };
  }
);
const bagSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartItems: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      console.log("🚀 ~ builder.addCase ~  action:", action.payload.items);

      const cartDetails = getCartDetails(action.payload.items);
      console.log("🚀 ~ builder.addCase ~ cartDetails:", cartDetails);
    });
  },
});

export const {} = bagSlice.actions;

export default bagSlice.reducer;
