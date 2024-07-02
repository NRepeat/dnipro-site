import React from "react";

export default function Page({ params }: { params: { sex: string } }) {
  console.log("🚀 ~ Page ~ params:", params);
  return <div>My Post: {params.sex}</div>;
}
