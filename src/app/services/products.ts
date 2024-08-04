import { Product } from "@prisma/client";
import { axiosInstance } from "./axios-instance";
import { ApiRoutesPath } from "./constants";
import { AxiosResponse } from "axios";

const searchProducts = async (
  query: string
): Promise<AxiosResponse<Product[]>> => {
  return axiosInstance.get<Product[]>(ApiRoutesPath.SEARCH_PRODUCTS, {
    params: { query },
  });
};

const productsAPIactions = { searchProducts };

export default productsAPIactions;
