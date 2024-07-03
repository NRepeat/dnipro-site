import { getCollectionByID } from "@/app/data/collection";
import Link from "next/link";
import React from "react";

export default async function Page({ params }: { params: { sex: string } }) {
  const collection = await getCollectionByID(1);
  return (
    <div>
      My Post: {collection && collection.name}{" "}
      <Link href={"./women/clothes"}>clothes</Link>
    </div>
  );
}
