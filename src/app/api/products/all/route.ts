import prisma from "@/app/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10", 10);
    const skip = parseInt(req.nextUrl.searchParams.get("skip") || "0", 10);

    const products = await prisma.product.findMany({
      take: limit,
      skip: skip,
      include: { manufacturer: true, variants: true, category: true },
    });

    return NextResponse.json(products);
  } catch (error) {
    throw new Error("Error while search products");
  }
}
