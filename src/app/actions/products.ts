"use server";

import { revalidatePath } from "next/cache";
import prisma from "../utils/prisma";
import { products } from "../../../prisma/data";

export const getUsers = async (limit: number, skip: number) => {
  try {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    const response = await fetch(url);
    const data = await response.json();
    // revalidatePath("/collections/women");
    return data.products;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};

export const getFilteredProducts = async (filter: string) => {
  try {
    const url = `https://dummyjson.com/products/search?q=${filter}`;

    const response = await fetch(url);
    const data = await response.json();
    // revalidatePath("/collections/women");
    return data.products;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};

export const getProduct = async (id: string) => {
  try {
    const url = `https://dummyjson.com/products/${id}`;
    await new Promise((reslove) => setTimeout(reslove, 1000));
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};

export const addBulkProducts = async () => {
  try {
    await prisma.product.createMany({ data: products });
  } catch (error) {}
};
