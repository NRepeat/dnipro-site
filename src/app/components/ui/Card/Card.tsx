import { Card } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

type CustomCardProps = {
  id: string;
  image: string;
};

const CustomCard: FC<CustomCardProps> = ({ id, image }) => {
  return (
    <Card
      className={`rounded-sm flex-row  items-center   row-span- col-span-3  w-[300px] h-[300px]  justify-center  bg-transparent shadow-md border-2 border-gray-400 hover:border-black transition-all hover:shadow-large hover:shadow-white`}
    >
      {image && <Image className="p-4" src={image} alt="card-image" />}
    </Card>
  );
};

export default CustomCard;
