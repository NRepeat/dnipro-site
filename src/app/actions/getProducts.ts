"use server";

import { revalidatePath } from "next/cache";

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
