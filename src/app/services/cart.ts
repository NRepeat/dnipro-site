import { Cart, Manufacturer } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { ApiRoutesPath } from "./constants";
import { CartDto } from "./dto/cart";

const fetchCart = async (): Promise<AxiosResponse<{ cart: CartDto }>> => {
  return axios.get<{ cart: CartDto }>(ApiRoutesPath.CART);
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
const cartAPIactions = { fetchCart, updateCartQuantity, deleteCart };

export default cartAPIactions;
