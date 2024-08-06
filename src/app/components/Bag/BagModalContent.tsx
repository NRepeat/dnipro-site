import { ModalBody } from "@nextui-org/react";
import React, { useCallback, useEffect, useState } from "react";
import ProductBagCard from "./ProductBagCard";
import { BagStateType } from "@/app/store/slice/bagSlice";
import EmptyCartInfo from "./EmpryCartInfo";

const BagModalContent = ({ bagState }: { bagState: BagStateType }) => {
  const [products, setProducts] = useState<any[]>();

  return (
    <ModalBody className="overflow-auto">
      {products && products.length > 0 ? (
        products.map((product: any) => (
          <ProductBagCard product={product} key={product.id} />
        ))
      ) : (
        <EmptyCartInfo />
      )}
    </ModalBody>
  );
};

export default BagModalContent;
