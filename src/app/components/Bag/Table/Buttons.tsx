"use client";
import { handler } from "@/app/actions/payments/liqPay/liqPay";
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const Buttons = () => {
  const [formHtml, setFormHtml] = useState<string>();

  const fetchCheckoutForm = async () => {
    try {
      const response = await handler();

      setFormHtml(response);
    } catch (error) {
      console.error("Error fetching checkout form:", error);
    }
  };
  useEffect(() => {
    fetchCheckoutForm();
  }, []);
  return (
    <div className="flex flex-col py-8 gap-4">
      {formHtml && <div dangerouslySetInnerHTML={{ __html: formHtml }} />}
      or
      <Button>Paypal</Button>
    </div>
  );
};

export default Buttons;
