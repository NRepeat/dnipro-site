import { Cart, Manufacturer } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { ApiRoutesPath } from "./constants";
import { CartDto } from "./dto/cart";

const fetchCart = async (): Promise<AxiosResponse<{ cart: CartDto }>> => {
  return axios.get<{ cart: CartDto }>(ApiRoutesPath.CART);
};

const cartAPIactions = { fetchCart };

export default cartAPIactions;
