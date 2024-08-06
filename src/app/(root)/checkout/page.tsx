"use client";
import { handler } from "@/app/actions/payments/liqPay/liqPay";
import { useState } from "react";

const CheckoutPage = () => {
  const [formHtml, setFormHtml] = useState("");

  const fetchCheckoutForm = async () => {
    try {
      const response = await handler();

      setFormHtml(response!);
    } catch (error) {
      console.error("Error fetching checkout form:", error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={fetchCheckoutForm}>Get Payment Form</button>
    </div>
  );
};

export default CheckoutPage;
