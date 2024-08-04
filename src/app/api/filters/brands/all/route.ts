import prisma from "@/app/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    console.log("🚀 ~ GET ~ categories:", categories);
    return NextResponse.json(categories);
  } catch (error) {
    throw new Error("Error find all manufactures");
  }
}
