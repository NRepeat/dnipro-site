import { getCollectionByID } from "@/app/data/collection";
import React from "react";

export default async function Page({ params }: { params: { sex: string } }) {
  const collection = await getCollectionByID(1);
  return <div>My Post: {collection && collection.name} </div>;
}
