"use client";
import {
  FilterStateType,
  setFilterIsOpen,
} from "@/app/store/slice/filterSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";
import React, {
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "./Card";
import { getUsers } from "@/app/actions/getProducts";

const GridWrapper = ({
  children,
  products,
}: {
  children?: React.ReactNode;
  products: any[];
}) => {
  const NUMBER_OF_USERS_TO_FETCH = 10;
  const [offset, setOffset] = useState(NUMBER_OF_USERS_TO_FETCH);
  const [users, setUsers] = useState<any[]>(products);
  const { ref, inView } = useInView();
  const filter = useSelector(
    (state: { filter: FilterStateType }) => state.filter
  );
  const state = React.useRef<any>();
  const mapCollectionCard = users.map((product) => {
    return <CollectionCard key={product.title} product={product} />;
  });
  const loadMoreUsers = useCallback(async () => {
    const apiUsers = await getUsers(NUMBER_OF_USERS_TO_FETCH, offset);
    console.log("🚀 ~ loadMoreUsers ~ apiUserss:", apiUsers);
    setUsers([...users, ...apiUsers]);
    setOffset(offset + NUMBER_OF_USERS_TO_FETCH);
  }, [offset, users]);
  useEffect(() => {
    if (inView) {
      loadMoreUsers();
    }
  }, [inView, loadMoreUsers]);
  gsap.registerPlugin(Flip);

  state.current = filter.flipRef;
  useLayoutEffect(() => {
    if (state.current) {
      Flip.from(state.current, {
        stagger: {
          each: 0.5,
          grid: "auto",
          from: "start",
          amount: 1.5,
          axis: "y",
          ease: "sine.in",
        },
        ease: "sine.out",
      });
    }
  }, [filter.filterIsOpen]);

  return (
    <div
      className={`grid ${filter.filterIsOpen ? "grid-cols-3" : "grid-cols-4"}`}
    >
      {mapCollectionCard}
      <div ref={ref}>Loading...</div>
      {children}
    </div>
  );
};

export default GridWrapper;
