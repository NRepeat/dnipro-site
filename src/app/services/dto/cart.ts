import { Cart, CartItem, Product, ProductItem } from "@prisma/client";

export type CartItemDto = CartItem & {
  productItem: ProductItem & {
    product: Product;
  };
};
export interface CartDto extends Cart {
  products: CartItemDto[];
}

export interface CreateCartItem {
  productItemId: number;
  quantity: number;
}
