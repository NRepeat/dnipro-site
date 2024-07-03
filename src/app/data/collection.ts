"use server";

import { revalidatePath } from "next/cache";

let collections = [{ id: 1, name: "firsCollection" }];
export const getCollectionByID = async (id: number) => {
  try {
    const collection = collections.find((data) => data.id === id);
    if (collection) return collection;
  } catch (error) {}
};
const updateName = async (id: number, name: string) => {
  try {
    const data = await getCollectionByID(id);
    if (data) {
      const newData = { ...data, name };
      collections = collections.map((collection) =>
        collection.id === id ? newData : collection
      );
      console.log("Updated Collections: ", collections);
    }
  } catch (error) {
    console.error(error);
  }
};
export const handleFormAction = async (formData: FormData) => {
  const newCollection = formData.get("name") as string;
  const pathname = formData.get("pathname") as string;
  await updateName(1, newCollection);
  revalidatePath(pathname);
};
