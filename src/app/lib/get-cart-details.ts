import { Cart } from "@prisma/client";
import { CartStateItem } from "../store/slice/cartSlice";
import { CartDto } from "../services/dto/cart";
import { calcCartTotalPrice } from "./calc-cart-item-price";

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDto): ReturnProps => {
  console.log("🚀 ~ getCartDetails ~ data:", data);
  const items: CartStateItem[] = data.products.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.title,
    imageUrl: item.productItem.images as string[],
    price: calcCartTotalPrice(item),
  }));
  return {
    items,
    totalAmount: data.totalAmount,
  };
};
