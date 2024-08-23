import prisma from "@/app/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.get("query" || "");
    const products = await prisma.product.findMany({
      where: {
        title: {
          contains: query || "",
          mode: "insensitive",
        },
      },
      take: 5,
    });
    return NextResponse.json(products);
  } catch (error) {
    throw new Error("Error while search products");
  }
}
