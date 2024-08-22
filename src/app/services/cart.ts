import axios, { AxiosResponse } from "axios";
import { ApiRoutesPath } from "./constants";
import { CartDto, CreateCartItem } from "./dto/cart";

const fetchCart = async ({
  cartToken,
}: {
  cartToken?: string;
}): Promise<AxiosResponse<{ cart: CartDto }>> => {
  return axios.get<{ cart: CartDto }>(ApiRoutesPath.CART, {
    headers: cartToken
      ? {
          Cookie: `cart=${cartToken}`,
        }
      : {},
    withCredentials: true,
  });
};
const updateCartQuantity = async ({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}): Promise<AxiosResponse<{ cart: CartDto }>> => {
  return axios.patch<{ cart: CartDto }>(ApiRoutesPath.CART + id, { quantity });
};
const deleteCart = async ({
  id,
}: {
  id: number;
}): Promise<AxiosResponse<{ cart: CartDto }>> => {
  return axios.delete<{ cart: CartDto }>(ApiRoutesPath.CART + id);
};
const createCartItem = async ({
  productItemId,
  quantity,
}: CreateCartItem): Promise<AxiosResponse<{ cart: CartDto }>> => {
  return axios.post<{ cart: CartDto }>(ApiRoutesPath.CART, {
    productItemId,
    quantity,
  });
};

const cartAPIactions = {
  fetchCart,
  updateCartQuantity,
  deleteCart,
  createCartItem,
};

export default cartAPIactions;
