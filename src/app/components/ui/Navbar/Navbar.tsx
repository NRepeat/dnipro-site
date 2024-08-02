import { setFilterShouldStick } from "@/app/store/slice/filterSlice";
import React, { useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import BagModal from "../../Bag/BagModal";
import BuyRightNowModal from "../../Bag/BuyRightNowModal";
import NavbarCustomContent from "./NavbarContent";

const NavBar = () => {
  // const dispatch = useDispatch();
  // const ref = useRef(null);
  // gsap.registerPlugin(ScrollTrigger);

  // useLayoutEffect(() => {
  //   const handleOnScrollPositionChange = (direction: number) => {
  //     if (direction === -1) {
  //       showAnim.play();
  //     } else {
  //       showAnim.reverse();
  //     }
  //     dispatch(setFilterShouldStick(direction === -1 ? false : true));
  //   };

  //   const showAnim = gsap
  //     .from(ref.current, {
  //       yPercent: -100,
  //       paused: true,
  //       duration: 0.2,
  //     })
  //     .progress(1);

  //   ScrollTrigger.create({
  //     start: "top top",
  //     end: "max",
  //     onUpdate: (self) => handleOnScrollPositionChange(self.direction),
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, [dispatch]);
  return (
    <div className="main-tool-bar  w-full  ">
      <NavbarCustomContent />
      <BagModal />
      <BuyRightNowModal />
    </div>
  );
};

export default NavBar;
