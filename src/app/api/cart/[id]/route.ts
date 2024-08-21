import { updateCartTotalAmount } from "@/app/lib/update-cart-total-amount";
import prisma from "@/app/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const token = req.cookies.get("cart")?.value;
    if (!token) {
      return NextResponse.json({ error: "Cart token not found" });
    }
    const cartItem = await prisma.cartItem.findFirst({
      where: { id: Number(id) },
    });
    if (!cartItem) {
      return NextResponse.json({ error: "Cart item not found" });
    }
    const body = (await req.json()) as { quantity: number };
    await prisma.cartItem.update({
      where: { id: cartItem.id },
      data: { quantity: body.quantity },
    });
    const updatedUserCart = await updateCartTotalAmount(token);
    return NextResponse.json({ cart: updatedUserCart });
  } catch (error) {
    return NextResponse.json({
      message: "Error update cart item",
      error,
      status: 500,
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);

    const token = req.cookies.get("cart")?.value;
    if (!token) {
      return NextResponse.json({ error: "Cart token not found" });
    }
    const cartItem = await prisma.cartItem.findFirst({
      where: { id },
    });
    if (!cartItem) {
      return NextResponse.json({ error: "Cart item not found" });
    }
    await prisma.cartItem.delete({
      where: { id },
    });
    const updatedUserCart = await updateCartTotalAmount(token);
    return NextResponse.json({ cart: updatedUserCart });
  } catch (error) {
    return NextResponse.json({
      message: "Error update cart item",
      error,
      status: 500,
    });
  }
}
