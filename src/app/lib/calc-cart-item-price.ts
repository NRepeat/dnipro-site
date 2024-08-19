import { CartItemDto } from "../services/dto/cart";

export const calcCartTotalPrice = (item: CartItemDto) => {
  return Number(item.productItem.price) * item.quantity;
};
