import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ProductBagCard = ({ product }: { product: any }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Card>
        <CardHeader>{product.title}</CardHeader>
        <CardBody className="justify-center">
          <Image
            alt="Card example background"
            className="z-0 h-full object-cover  transition-all rounded-none jus w-full flex"
            src={product.images[0]}
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
