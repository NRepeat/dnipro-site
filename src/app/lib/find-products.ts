import { GetSearchParams } from "../types/types";
import prisma from "../utils/prisma";

const DEFAULT_MIN_PRICE = '0';
const DEFAULT_MAX_PRICE = '100000';

export const findProduct = async (params: GetSearchParams) => {
  const { brand, manufacture, category } = params;
  const manufactureArr = manufacture?.split(",");
  const sizes = params.size?.split(",").map(Number);
  const minPrice = params.priceFrom || DEFAULT_MIN_PRICE;
  const maxPrice = params.priceTo || DEFAULT_MAX_PRICE;
  const products = await prisma.product.findMany({
    where: {
      manufacturer: manufacture ? { slug: { in: manufactureArr } } : undefined,
      variants:{some:{size: {in:sizes} ,price:{gte:minPrice ,lte:maxPrice}}}
    },
    include: {
      category: true,
      manufacturer: true,
      variants:{
        orderBy:{price:"desc"},
        where:{
        price:{gt:minPrice}
      }}
    },
  });
  return products;
};
