import { findOrCreateCart } from "@/app/lib/find-or-create-cart";
import { updateCartTotalAmount } from "@/app/lib/update-cart-total-amount";
import { CreateCartItem } from "@/app/services/dto/cart";
import prisma from "@/app/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cart")?.value;
    if (!token) {
      return NextResponse.json({ cart: { totalAmount: 0, products: [] } });
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
    const userCart = await findOrCreateCart(token);
    const { productItemId, quantity } = (await req.json()) as CreateCartItem;
    const foundCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: productItemId,
      },
    });
    if (foundCartItem) {
      await prisma.cartItem.update({
        where: { id: foundCartItem.id },
        data: {
          quantity: foundCartItem.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId,
          quantity: 1,
        },
      });
    }

    const updatedUserCart = await updateCartTotalAmount(token);
    const response = NextResponse.json({ cart: updatedUserCart });
    response.cookies.set("cart", token);
    return response;
  } catch (error) {
    return NextResponse.json({ message: "Error create cart", error: error });
  }
}
