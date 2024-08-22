import type {
  ProductItem,
  Product,
  Manufacturer,
  Category,
} from "@prisma/client";

export type FullProductItem = ProductItem & { product: FullProduct };
export type FullProduct = Product & {
  manufacturer: Manufacturer;
  variants: ProductItem[];
  category: Category;
};
