import { NextResponse } from "next/server";
import prisma from "../utils/prisma";
import { calcCartTotalPrice } from "./calc-cart-item-price";

export const updateCartTotalAmount = async (token: string) => {
  try {
    const cart = await prisma.cart.findFirst({
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
    if (!cart) {
      return NextResponse.json({ error: "Cart not found" });
    }
    const totalAmount = cart.products.reduce((acc, item) => {
      return acc + calcCartTotalPrice(item);
    }, 0);
    return await prisma.cart.update({
      where: {
        id: cart.id,
      },
      data: {
        totalAmount,
      },
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
  } catch (error) {
    return NextResponse.json({ error: "Error update total cart amount" });
  }
};
