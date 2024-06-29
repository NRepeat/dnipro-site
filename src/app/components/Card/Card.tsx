import { Card } from "@nextui-org/react";

const CardWithTextFullWidth = ({ id }: { id: string }) => {
  return (
    <Card className="w-full rounded-none flex-row gap-2 justify-center items-center">
      <div id={`card-scroll`} className="h-52 min-w-16 border-2 bg-black">
        1
      </div>
    </Card>
  );
};

export default CardWithTextFullWidth;
