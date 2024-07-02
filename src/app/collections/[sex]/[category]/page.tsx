import React from "react";

export default function Page({ params }: { params: { category: string } }) {
  return <div>My category: {params.category}</div>;
}
