import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductBagCard = ({ product }: { product: Product }) => {
  console.log("🚀 ~ ProductBagCard ~ product:", product);
  return (
    <Link href={`/product/${product.id}`}>
      <Card>
        <CardHeader>{product.title}</CardHeader>
        <CardBody className="justify-center">
          <Image
            width={300}
            height={300}
            alt="Card example background"
            className="z-0 h-full object-cover  transition-all rounded-none jus w-full flex"
            property="priority"
            src={product.thumbnail}
          />
          <p>brand</p>
          <p>price</p>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </Link>
  );
};

export default ProductBagCard;
