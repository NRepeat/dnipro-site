"use client";
import { ProductStateType, setSize } from "@/app/store/slice/productSlice";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SizePicker = ({ sizes }: { sizes: any[] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const product = useSelector(
    (state: { product: ProductStateType }) => state.product
  );
  const handleSetSize = (size: string | number) => {
    dispatch(setSize(size));
  };
  return (
    <div className="py-4">
      <div className="inline-flex justify-between w-full items-center">
        <p className="text-sm capitalize">CHOOSE SIZE</p>
        <Button onPress={onOpen} variant="light" className="p-0 gap-0 border-1">
          Size guid
        </Button>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex gap-2 ">
        {sizes.map((size) => (
          <Button
            variant="light"
            key={size}
            className={`${
              product.size === size && "border-1 border-sky-800"
            } border-1`}
            onClick={() => handleSetSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SizePicker;
