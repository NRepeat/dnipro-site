import React from "react";
import { CiShare2 } from "react-icons/ci";
import FavButtons from "./Buttons/FavButtons";
import ColorPicker from "./ColorPicker";
import SizePicker from "./SizePicker";
import BuyButtons from "./Buttons/BuyButtons";
import { Button, Divider } from "@nextui-org/react";
import ShippingInfo from "./Shipping";

const Info = ({ product }: { product: any }) => {
  return (
    <section className="flex flex-col w-full max-w-[450px]">
      <div className="inline-flex justify-between items-center min-w-[300px]">
        <p className="capitalize text-sm font-light py-4">
          {product.brand && product.brand.toUpperCase()}
        </p>
        <div className="flex">
          <Button isIconOnly variant="light">
            <CiShare2 className="w-4 h-4" />
          </Button>
          <FavButtons />
        </div>
      </div>
      <div className="flex pb-8 pt-1 gap-4 flex-wrap">
        <p className="w-full font-semibold">{product.title}</p>
        <p className="pr-4">
          <span>$</span> {product.price}
        </p>
      </div>
      <div>
        <div className="pb-8">
          {product ? (
            <>
              <Divider />
              {/* <ColorPicker product={product} /> */}
              <Divider />
              <SizePicker sizes={[20, 30, 40]} productId={product.id} />
              <BuyButtons />
            </>
          ) : (
            <p>THIS ITEM IS SOLD OUT</p>
          )}
        </div>
        <Divider />
        <div>
          <p className="flex flex-col py-4">
            <span className="pb-1.5">DETAILS</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt optio excepturi aperiam itaque
            odit quod qui vero quos rem similique ipsum alias, fuga commodi
            voluptatibus nihil officia eligendi! Sed, unde.
          </p>
          <ul>
            <li>Composition 61% Viscose 39% Linen</li>
            <li>Double pleats </li>
            <li>Elasticated waistband with belt loops </li>
            <li>Two side welt pockets </li>
          </ul>
        </div>
      </div>

      <ShippingInfo />
    </section>
  );
};

export default Info;
