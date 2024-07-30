import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import Buttons from "./Buttons";

const Check = () => {
  return (
    <div className="bg-gray-200 w-[400px]">
      <div className="inline-flex w-full justify-between">
        <span>Subtotal</span>
        <span>€ 1.988</span>
      </div>
      <div>
        <p>Shiping</p>
        <p> Standard</p>
        <div>
          <span>Delivery in 4-6 working days</span>
          <span>€ 9</span>
        </div>
        <p>
          By clicking on Proceed you can log in or create your account and enjoy
          shopping without costs on orders over € 150
        </p>
        <div className="inline-flex w-full justify-between">
          <p>Total</p>
          <span>€ 1.988</span>
        </div>
      </div>
      <Buttons />
    </div>
  );
};

export default Check;
