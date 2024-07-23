"use client";
import { BagStateType, setIsModalOpen } from "@/app/store/slice/bagSlice";
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
import ProductBagCard from "./ProductBagCard";
import EmptyCartInfo from "./EmpryCartInfo";
import BagModalContent from "./BagModalContent";

const BagModal = () => {
  const dispatch = useDispatch();
  const bagState = useSelector((state: { bag: BagStateType }) => state.bag);

  const { onOpenChange } = useDisclosure();
  return (
    <Modal
      isOpen={bagState.isOpenModule}
      onOpenChange={onOpenChange}
      radius="none"
      classNames={{
        body: "mx-0 my-0 align-items-none",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
        wrapper: "w-full justify-end mx-0 my-0 align-items-none",
      }}
    >
      <ModalContent className="right-0  mx-0 my-0 margin-0 ">
        {(onClose) => {
          const handleClose = () => {
            onClose();
            dispatch(setIsModalOpen(!bagState.isOpenModule));
          };
          return (
            <>
              <ModalHeader className="flex flex-col gap-1">
                You have 1 item in your Shopping Bag
              </ModalHeader>
              <BagModalContent bagState={bagState} />
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

export default BagModal;
