import cartAPIactions from "@/app/services/cart";
import { CartDto, CreateCartItem } from "@/app/services/dto/cart";
import { createAsyncThunk, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  CartStateType,
  setCartItemsLoading,
  setCartLoading,
} from "../slice/cartSlice";
import { getCartDetails } from "@/app/lib/get-cart-details";
import toast from "react-hot-toast";

const fetchCart = createAsyncThunk<CartDto>(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setCartItemsLoading({ cartItemsLoading: true }));
    const response = await cartAPIactions.fetchCart({});
    return response.data.cart;
  }
);
const updateCartQuantity = createAsyncThunk<
  CartDto,
  { id: number; quantity: number }
>(
  "cart/updateCartQuantity",
  async ({ id, quantity }: { id: number; quantity: number }, thunkAPI) => {
    thunkAPI.dispatch(setCartLoading({ cartLoading: true }));
    const response = await cartAPIactions.updateCartQuantity({ id, quantity });
    return response.data.cart;
  }
);
const deleteCart = createAsyncThunk<CartDto, { id: number }>(
  "cart/deleteCart",
  async ({ id }: { id: number }, thunkAPI) => {
    const response = await cartAPIactions.deleteCart({ id });
    return response.data.cart;
  }
);

const createCartItem = createAsyncThunk<CartDto, CreateCartItem>(
  "cart/createCartItem",
  async ({ productItemId, quantity }, thunkAPI) => {
    thunkAPI.dispatch(setCartLoading({ cartLoading: true }));
    const response = await cartAPIactions.createCartItem({
      productItemId,
      quantity,
    });
    return response.data.cart;
  }
);
const cartCase = (
  builder: ActionReducerMapBuilder<CartStateType>,
  thunk: any
) => {
  const fulfilled = builder.addCase(thunk.fulfilled, (state, action) => {
    const { items, totalAmount } = getCartDetails(action.payload);
    state.items = items;
    state.totalAmount = totalAmount;
    state.loading = false;
  });
  const pending = builder.addCase(thunk.pending, (state, action) => {
    // state.loading = true;
  });
  const rejected = builder.addCase(thunk.rejected, (state, action) => {
    state.error = true;
    state.loading = false;
    state.cartItemsLoading = false;
  });
  return { fulfilled, pending, rejected };
};
// const;
const extraReducers = (builder: ActionReducerMapBuilder<CartStateType>) => {
  cartCase(builder, updateCartQuantity);
  cartCase(builder, fetchCart);
  cartCase(builder, deleteCart);
  cartCase(builder, createCartItem);
};
const thunk = { fetchCart, updateCartQuantity, deleteCart, createCartItem };
const cartThunk = { thunk, extraReducers };
export default cartThunk;
