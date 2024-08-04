import prisma from "@/app/utils/prisma";
import { NextResponse } from "next/server";

export default async function GET() {
  try {
    const manufactures = await prisma.manufacturer.findMany();
    return NextResponse.json(manufactures);
  } catch (error) {
    throw new Error("Error find all manufactures");
  }
}
