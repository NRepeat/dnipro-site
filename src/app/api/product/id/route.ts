import prisma from "@/app/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      throw new Error("ID not found");
    }
    const product = await prisma.product.findUnique({
      where: { uid: id },
      include: { manufacturer: true, variants: true, category: true },
    });
    return NextResponse.json(product);
  } catch (error) {
    throw new Error("Product not found");
  }
}
