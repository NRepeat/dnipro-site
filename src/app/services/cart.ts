import { Cart, Manufacturer } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { ApiRoutesPath } from "./constants";
import { CartDto } from "./dto/cart";

const fetchCart = async (): Promise<AxiosResponse<CartDto>> => {
  return axios.get<CartDto>(ApiRoutesPath.CART);
};

const cartAPIactions = { fetchCart };

export default cartAPIactions;
