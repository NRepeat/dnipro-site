"use client";
import {
  BagStateType,
  setIsBuyRightNowModalOpen,
  setIsModalOpen,
} from "@/app/store/slice/bagSlice";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductBagCard from "./ProductBagCard";
import EmptyCartInfo from "./EmpryCartInfo";
import BagModalContent from "./BagModalContent";
import Info from "../SingleProduct/Info";
import { getUsers } from "@/app/actions/getProducts";

const BuyRightNowModal = () => {
  const [products, setProducts] = useState<any[]>();

  const dispatch = useDispatch();
  const bagState = useSelector((state: { bag: BagStateType }) => state.bag);
  const getProducts = useCallback(async () => {
    if (bagState.productsToBuy && bagState.productsToBuy.length > 0) {
      const products = await getUsers(bagState.productsToBuy.length, 0);
      setProducts(products);
    } else {
      setProducts([]);
    }
  }, [bagState.productsToBuy]);

  useEffect(() => {
    getProducts();
  }, [bagState, getProducts]);

  const { onOpenChange } = useDisclosure();
  return (
    <Modal
      isOpen={bagState.isBuyRightNowModalOpen}
      onOpenChange={onOpenChange}
      radius="none"
    >
      <ModalContent className="right-0  mx-0 my-0 margin-0 ">
        {(onClose) => {
          const handleClose = () => {
            onClose();
            dispatch(
              setIsBuyRightNowModalOpen({
                isOpen: !bagState.isBuyRightNowModalOpen,
              })
            );
          };
          return (
            <>
              <ModalHeader className="flex flex-col gap-1">
                You have 1 item in your Shopping Bag
              </ModalHeader>
              {/* <BagModalContent bagState={bagState} /> */}
              {products?.length && <Info product={products[0]} />}

              <ModalFooter>
                <Button color="danger" variant="light" onPress={handleClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          );
        }}
      </ModalContent>
    </Modal>
  );
};

export default BuyRightNowModal;
