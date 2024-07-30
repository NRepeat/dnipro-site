"use client";
import { addBulkProducts } from "@/app/actions/products";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

const Quantity = ({ quantityInit }: { quantityInit: number }) => {
  const [quantity, setQuantity] = useState<number>(quantityInit);

  const increment = async () => {
    // addBulkProducts();
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <td className="px-6 py-4 whitespace-nowrap w-[250px]">
      <Input
        type="text"
        value={`${quantity}`}
        onChange={(e) => setQuantity(Number(e.target.value))}
        startContent={
          <Button
            variant="light"
            onClick={increment}
            className="w-[50px] p-0 min-w-0"
          >
            +
          </Button>
        }
        endContent={
          <Button
            variant="light"
            onClick={decrement}
            className="w-[50px] p-0 min-w-0"
          >
            -
          </Button>
        }
      />
    </td>
  );
};

export default Quantity;
