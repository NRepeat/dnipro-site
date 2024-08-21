import prisma from "@/app/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cart")?.value;
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
    return NextResponse.json({ cart: userCart });
  } catch (error) {
    return NextResponse.json({ message: "Error get  cart" });
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cart")?.value;
    if (!token) {
      token = crypto.randomUUID();
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
    return NextResponse.json({ cart: userCart });
  } catch (error) {
    return NextResponse.json({ message: "Error create cart" });
  }
}
