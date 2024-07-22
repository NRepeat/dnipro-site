"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

const ShippingInfo = () => {
  return (
    <Accordion className="padding-x-0" isCompact>
      <AccordionItem
        className="p-0"
        key="1"
        aria-label="Accordion 1"
        title="Shipping & Returns"
      >
        <div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="font-bold">Standard Shipping</p>
              <span>Delivery in 4-6 working days</span>
            </div>
            <div>
              <p className="font-bold">Standard Shipping</p>
              <span>Delivery in 1-3 working days</span>
            </div>

            <div>
              <p className="font-bold">Standard Shipping</p>
              <span>
                The order will be delivered to a store of your choice. You will
                receive an email as soon as your order is ready for pick up.
              </span>
            </div>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default ShippingInfo;
