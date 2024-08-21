"use client";

import { Button } from "@/components/ui/button";

const BuyButtons = () => {
  return (
    <>
      <div className="flex gap-2 wrap flex-col w-full">
        <Button className="w-full">Add to shopping bag</Button>
        <Button color="primary" className="w-full">
          Buy right now
        </Button>
        <p>
          <span>Product Code:</span> 4SGPP13IT00RJ1UBRY
        </p>
      </div>
    </>
  );
};

export default BuyButtons;
