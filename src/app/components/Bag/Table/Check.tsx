import { Button } from "@nextui-org/react";
import React from "react";

const Check = () => {
  return (
    <div className="bg-gray-200 min-w-[300px]">
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
          By clicking on "Proceed" you can log in or create your account and
          enjoy shopping without costs on orders over € 150
        </p>
        <div className="inline-flex w-full justify-between">
          <p>Total</p>
          <span>€ 1.988</span>
        </div>
      </div>
      <div className="flex flex-col py-8 gap-4">
        <Button>Proceed to purchase</Button>
        or
        <Button>Paypal</Button>
      </div>
    </div>
  );
};

export default Check;
