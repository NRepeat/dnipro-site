import { Manufacturer } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { ApiRoutesPath } from "./constants";

const getAllManufactures = async (): Promise<AxiosResponse<Manufacturer[]>> => {
  return axios.get<Manufacturer[]>(ApiRoutesPath.ALL_MANUFACTURES);
};

const getAllBrands = async (): Promise<AxiosResponse<Manufacturer[]>> => {
  return axios.get<Manufacturer[]>(ApiRoutesPath.ALL_BRANDS);
};

const filtersAPIactions = { getAllManufactures, getAllBrands };

export default filtersAPIactions;