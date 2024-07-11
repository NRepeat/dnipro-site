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
    <Card className="container  transition-transform-background-disable w-full rounded-none cursor-pointer">
      <CardBody className="flex w-full items-center justify-center overflow-hidden min-h-[400px]">
        <Image
          src={product.thumbnail}
          alt="image"
          className="w-full h-auto object-cover rounded-none"
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
