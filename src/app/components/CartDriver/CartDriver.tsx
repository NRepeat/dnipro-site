import React, { FC } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CartItem from "../CartItem/CartItem";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const CartDriver: FC<Props> = ({ children, className }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex pb-0 bg-gray-200 flex-col justify-between">
        <SheetTitle>
          In cart <span className="font-bold">3 items</span>
        </SheetTitle>
        <div className="-mx-6 mt-5 overflow-auto scrollbar flex-1 gap-2 flex flex-col">
          <CartItem
            id={0}
            imageUrl={
              "https://assets.vogue.com/photos/61b3d8fcafd83244ae63b1a9/master/w_1280,c_limit/019-thierry-mugler-spring-1998-couture-detail-CN10057093.jpg"
            }
            name={"Test"}
            price={10}
            quantity={1}
            details={{
              color: "blue",
              name: "Test",
              size: "12",
            }}
          />
          <CartItem
            id={0}
            imageUrl={
              "https://assets.vogue.com/photos/61b3d8fcafd83244ae63b1a9/master/w_1280,c_limit/019-thierry-mugler-spring-1998-couture-detail-CN10057093.jpg"
            }
            name={"Test"}
            price={10}
            quantity={1}
            details={{
              color: "blue",
              name: "Test",
              size: "12",
            }}
          />
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full flex">
            <div className="flex mb-4">Total</div>
            <span>500$</span>
          </div>
          <Link href={"/bag"}>
            <Button className="w-full h-12 text-base">Make order </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDriver;
