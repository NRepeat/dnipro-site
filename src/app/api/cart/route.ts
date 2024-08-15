import prisma from "@/app/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;
    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }
    const userCart = await prisma.cart.findFirst({
      where: { OR: [{ token }] },
      include: {
        products: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: {
              include: { product: true },
            },
          },
        },
      },
    });
    return NextResponse.json({ items: userCart });
  } catch (error) {}
}
