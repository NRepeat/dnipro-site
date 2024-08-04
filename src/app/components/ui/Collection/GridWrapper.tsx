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
import { Spinner } from "@nextui-org/react";
import productsAPIactions, { FullProduct } from "@/app/services/products";

const GridWrapper = ({
  children,
  productsInitialData,
}: {
  children?: React.ReactNode;
  productsInitialData: FullProduct[];
}) => {
  const NUMBER_OF_USERS_TO_FETCH = 12;
  const [offset, setOffset] = useState(NUMBER_OF_USERS_TO_FETCH);
  const [products, setProducts] = useState<FullProduct[]>(productsInitialData);
  const { ref, inView } = useInView();
  const filter = useSelector(
    (state: { filter: FilterStateType }) => state.filter
  );
  const state = useRef<any>();

  const loadMoreUsers = useCallback(async () => {
    const apiProducts = await productsAPIactions.getAllProducts({
      limit: 12,
      skip: 0,
    });

    setProducts([...products, ...apiProducts.data]);
    setOffset(offset + NUMBER_OF_USERS_TO_FETCH);
  }, [offset, products]);
  // useEffect(() => {
  //   if (inView) {
  //     loadMoreUsers();
  //   }
  // }, [inView, loadMoreUsers, filter]);
  gsap.registerPlugin(Flip);

  state.current = filter.flipRef;
  useLayoutEffect(() => {
    if (state.current) {
      Flip.from(state.current, {
        ease: "sine.out",
      });
    }
  }, [filter.filterIsOpen]);
  const mapCollectionCard = products.map((product, i) => {
    return <CollectionCard key={i} product={product} />;
  });
  return (
    <main className="flex flex-col">
      <div
        className={`grid  gap-1 ${
          filter.filterIsOpen ? "grid-cols-3" : "grid-cols-4"
        }`}
      >
        {mapCollectionCard}
        {children}
      </div>
      <div ref={ref} className="w-full justify-center flex py-4">
        <Spinner />
      </div>
    </main>
  );
};

export default GridWrapper;
