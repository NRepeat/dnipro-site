import LiqPay from "@/app/module/sdk-nodejs-1.4/lib/liqpay";

const public_key = "sandbox_i3517449772";
const private_key = "sandbox_Mil3fi6KLbEOUITPCA1CMV1YrBRChDMt1qsAkfDr";
const liqpay = new LiqPay(public_key, private_key);

export async function handler() {
  try {
    const html = liqpay.cnb_form({
      action: "pay",
      amount: "1",
      currency: "USD",
      description: "description text",
      order_id: "order_id_123222asd2",
      version: "3",
      result_url: "http://localhost:3001/checkout",
      server_url:
        "https://v22yufhiyupk2mcjqrb73cyx3e.srv.us/api/payment/liqPay",
    });
    return html;
  } catch (error) {}
}

export async function comparePaymentData(data: any) {
  const signature = liqpay.str_to_sign(private_key + data + private_key);
  return signature;
}
