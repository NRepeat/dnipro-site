import prisma from "../utils/prisma";

export const findOrCreateCart = async (token: string) => {
  try {
    let userCart = await prisma.cart.findFirst({
      where: { token },
    });
    if (!userCart) {
      userCart = await prisma.cart.create({
        data: { token },
      });
    }
    return userCart;
  } catch (error) {
    console.log("🚀 ~ findOrCreateCart ~ error:", error);
    throw new Error("Error create cart");
  }
};
