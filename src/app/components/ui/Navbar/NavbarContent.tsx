"use client";
import { BagStateType, setIsModalOpen } from "@/app/store/slice/bagSlice";
import { setFilterShouldStick } from "@/app/store/slice/filterSlice";

import Link from "next/link";
import React, { useLayoutEffect } from "react";
import { IoSearchCircleOutline, IoBag } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import NavButtonWithDropdownMenuWrapper from "./DropdownMenu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Input } from "@/components/ui/input";

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
    <div className="text-black  max-navbar-w-disable w-full flex items-center justify-between px-4">
      <div className="w-1/3">
        <Link href="/" className="text-xl ">
          NNSHOP
        </Link>
      </div>
      <NavButtonWithDropdownMenuWrapper />
      <div className="w-1/3 flex gap-6 justify-end">
        <Input placeholder="Type to search..." type="search" className="w-48" />
        <div className="flex gap-4">
          <button>
            <RiAccountBoxFill className="w-5 h-5" />
          </button>
          <button>
            <MdFavoriteBorder className="w-5 h-5" />
          </button>
          <button onClick={handleOpenModal}>
            <IoBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarCustomContent;
