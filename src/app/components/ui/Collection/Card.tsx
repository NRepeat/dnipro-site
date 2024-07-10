import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import React, { FC } from "react";

type CollectionCardProps = {
  product: {
    title: string;
    price: string;
    discount: string;
    thumbnail: string;
  };
};

const CollectionCard: FC<CollectionCardProps> = ({ product }) => {
  const className = product.title.replace(/[\s']/g, "-").toLowerCase();
  return (
    <Card className="container  transition-transform-background-disable w-[300px]">
      <CardBody className="flex w-full items-center justify-center overflow-hidden">
        <Image
          src={product.thumbnail}
          alt="image"
          height={100}
          className="w-full h-auto object-cover"
        />
      </CardBody>
      <CardFooter className="justify-between">
        <p className="text-medium">{product.title}</p>
        <p>{product.price} UAH</p>
      </CardFooter>
    </Card>
  );
};

export default CollectionCard;
