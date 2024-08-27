import { Category, Manufacturer } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { ApiRoutesPath } from "./constants";
import {
  CategoryWithProductCount,
  ManufacturerWithProductCount,
} from "../components/Filter/Filter";
import { AllProductSizes } from "../types/types";

const getAllManufactures = async (): Promise<
  AxiosResponse<ManufacturerWithProductCount[]>
> => {
  return axios.get<ManufacturerWithProductCount[]>(
    ApiRoutesPath.ALL_MANUFACTURES
  );
};

const getAllBrands = async (): Promise<
  AxiosResponse<CategoryWithProductCount[]>
> => {
  return axios.get<CategoryWithProductCount[]>(ApiRoutesPath.ALL_BRANDS);
};
const getAllProductSizes = async (): Promise<
  AxiosResponse<AllProductSizes[]>
> => {
  return axios.get<AllProductSizes[]>(ApiRoutesPath.ALL_PRODUCTS_SIZES);
};
const filtersAPIactions = {
  getAllManufactures,
  getAllBrands,
  getAllProductSizes,
};

export default filtersAPIactions;
