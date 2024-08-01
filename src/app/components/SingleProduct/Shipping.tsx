"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const ShippingInfo = () => {
  return (
    <Accordion type="single" collapsible className="">
      <AccordionItem value={"shipping-returns"}>
        <AccordionTrigger>Shipping & Returns</AccordionTrigger>
        <AccordionContent>
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
                  The order will be delivered to a store of your choice. You
                  will receive an email as soon as your order is ready for pick
                  up.
                </span>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ShippingInfo;
