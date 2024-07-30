import { ModalBody } from "@nextui-org/react";
import React, { useCallback, useEffect, useState } from "react";
import ProductBagCard from "./ProductBagCard";
import { BagStateType } from "@/app/store/slice/bagSlice";
import EmptyCartInfo from "./EmpryCartInfo";
import { getUsers } from "@/app/actions/products";

const BagModalContent = ({ bagState }: { bagState: BagStateType }) => {
  const [products, setProducts] = useState<any[]>();

  const getProducts = useCallback(async () => {
    if (bagState.products && bagState.products.length > 0) {
      const products = await getUsers(bagState.products.length, 0);
      setProducts(products);
    } else {
      setProducts([]);
    }
  }, [bagState.products]);

  useEffect(() => {
    getProducts();
  }, [bagState, getProducts]);

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
