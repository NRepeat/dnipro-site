"use client";
import { BagStateType, setIsModalOpen } from "@/app/store/slice/bagSlice";
import { setFilterShouldStick } from "@/app/store/slice/filterSlice";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  Button,
  Input,
  NavbarContent,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useLayoutEffect } from "react";
import { IoSearchCircleOutline, IoBag } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import NavButtonWithDropdownMenuWrapper from "./DropdownMenu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const NavbarCustomContent = () => {
  const dispatch = useDispatch();

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const handleOnScrollPositionChange = (direction: number) => {
      direction === -1 ? showAnim.play() : showAnim.reverse();
      dispatch(setFilterShouldStick(direction === -1 ? false : true));
    };

    const showAnim = gsap
      .from(".main-tool-bar", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => handleOnScrollPositionChange(self.direction),
    });
  }, [dispatch]);
  const bagState = useSelector((state: { bag: BagStateType }) => state.bag);
  const handleOpenModal = () => {
    dispatch(setIsModalOpen(!bagState.isOpenModule));
  };
  return (
    <Navbar className="text-black  max-navbar-w-disable w-full" isBordered>
      <NavbarBrand>
        <Link href="/">Brand</Link>
      </NavbarBrand>
      <NavButtonWithDropdownMenuWrapper />
      <NavbarContent justify="end">
        <NavbarItem>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10 min-w-[300px]",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<IoSearchCircleOutline size={18} />}
            type="search"
          />
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly variant="light">
            <RiAccountBoxFill className="w-4 h-4" />
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button isIconOnly variant="light">
            <MdFavoriteBorder className="w-4 h-4" />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly variant="light" onClick={handleOpenModal}>
            <IoBag className="w-4 h-4" />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarCustomContent;
