import ProductsCarousel from "@/app/components/CompleteLook/CompleteLook";
import prisma from "@/app/utils/prisma";
import React from "react";

const MoreProducts = async () => {
  const products = await prisma.product.findMany({
    include: { manufacturer: true, category: true, variants: true },
  });
  return (
    <div>
      <ProductsCarousel
        products={products}
        title="COMPLETE THE LOOK"
        titleMargin={12}
      />
    </div>
  );
};

export default MoreProducts;
