import prisma from "@/app/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const manufactures = await prisma.product.findMany({
      include: {
        variants: { select: { size: true } },
        _count: {
          select: { variants: true },
        },
      },
    });
    return NextResponse.json(manufactures);
  } catch (error) {
    console.log("🚀 ~ GET ~ error:", error)
    throw new Error("Error find all manufactures");
  }
}
