import {
  Manufacturer,
  Product,
  CartItem,
  Category,
  ProductItem,
} from "@prisma/client";
import { axiosInstance } from "./axios-instance";
import { ApiRoutesPath } from "./constants";
import { AxiosResponse } from "axios";

export type FullProduct = Product & {
  manufacturer: Manufacturer;
  variants: ProductItem[];
  category: Category;
};
const searchProducts = async (
  query: string
): Promise<AxiosResponse<Product[]>> => {
  return axiosInstance.get<Product[]>(ApiRoutesPath.SEARCH_PRODUCTS, {
    params: { query },
  });
};

const getAllProducts = async ({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
}) => {
  return axiosInstance.get<FullProduct[]>(ApiRoutesPath.ALL_PRODUCTS);
};

const productsAPIactions = { searchProducts, getAllProducts };

export default productsAPIactions;
