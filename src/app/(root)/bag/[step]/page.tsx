import Check from "@/app/components/Bag/Table/Check";
import Quantity from "@/app/components/Bag/Table/Quantity";
import prisma from "@/app/utils/prisma";
import { Button, Image, Input } from "@nextui-org/react";
import React from "react";

const Bag = async ({ params }: { params: { step: string } }) => {
  const { step } = params;
  const products = await prisma.product.findMany();

  // const response = await handler();
  return (
    <div className="flex flex-col">
      <p>YOU HAVE 3 ITEMS IN YOUR SHOPPING BAG</p>
      {step === "preview" ? (
        <div className="flex ">
          <table className=" divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y- divide-gray-200">
              {products!.map((p: any) => (
                <>
                  <tr key={p.id}>
                    <td className="px-6 py-4 whitespace-nowrap flex gap-4">
                      <div className="w-[150px]">
                        {/* <Image
                          alt="Card example background"
                          className="z-0 h-full object-cover  transition-all rounded-none jus w-full flex"
                          src={p.images[0]}
                        /> */}
                      </div>

                      <div className="flex flex-col gap-1">
                        <span>GIORGIO ARMANI</span>
                        <span>Small la Prima Soft nappa leather handbag</span>
                        <span>Colour: Black</span>
                        <span>Size: U</span>
                      </div>
                    </td>
                    <Quantity quantityInit={1} />
                    <td className="px-6 py-4 whitespace-nowrap ">{p.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap  w-full gap-4 flex-col">
                      <p>Remove</p>
                      <p>To wish list</p>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          <Check />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Bag;
