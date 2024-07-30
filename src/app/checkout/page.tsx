"use client";
import { useState } from "react";
import handler from "../actions/payments/liqPay/liqPay";

const CheckoutPage = () => {
  const [formHtml, setFormHtml] = useState("");

  const fetchCheckoutForm = async () => {
    try {
      const response = await handler();
      console.log("🚀 ~ fetchCheckoutForm ~ response:", response);

      setFormHtml(response);
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
