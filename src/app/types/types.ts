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

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  brand?: string;
  size?: string;
  manufacture?: string;
  priceTo?: string;
  priceFrom?: string;
  category?: string;
}

export type AllProductSizes = Product & {
  variants: { size: number }[];
  _count: {
    variants: number;
  };
};
