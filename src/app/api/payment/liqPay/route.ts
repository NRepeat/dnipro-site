import { comparePaymentData } from "@/app/actions/payments/liqPay/liqPay";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const signature = formData.get("signature");
  const data = formData.get("data");
  const t = await comparePaymentData(data);
  if (signature === t) {
    console.log("🚀 ~ POST ~ t:", t);
  }
  return NextResponse.json(data);
};
