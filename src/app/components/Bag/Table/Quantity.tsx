"use client";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

const Quantity = ({ quantityInit }: { quantityInit: number }) => {
  const [quantity, setQuantity] = useState<number>(quantityInit);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <td className="px-6 py-4 whitespace-nowrap">
      <Input
        type="text"
        value={`${quantity}`}
        onChange={(e) => setQuantity(Number(e.target.value))}
        startContent={
          <Button variant="light" onClick={increment}>
            +
          </Button>
        }
        endContent={
          <Button variant="light" onClick={decrement}>
            -
          </Button>
        }
      />
    </td>
  );
};

export default Quantity;
