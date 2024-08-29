import prisma from "@/app/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: { products: true },
        },
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.log("🚀 ~ GET ~ error:", error)
    throw new Error("Error find all manufactures");
  }
}
