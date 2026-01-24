"use client";
import React, { useEffect, useState } from "react";

import LeftSide from "./LeftSide";
import { Product } from "@/types/homePage";
import SlidFilter from "./SlidFilter";
import { useProductFilterStore } from "@/stores/filterStore";

import RightSide from "./RightSide";

function NewProductPage({ initialProducts }: { initialProducts: Product[] }) {
  const filteredProducts = useProductFilterStore(
    (state) => state.filteredProducts
  );
  const setProducts = useProductFilterStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);

  return (
    <>
      <div className="px-10 grid grid-cols-[22%_78%] mt-10 space-x-10 max-sm:grid-cols-1 max-sm:px-0 max-sm:mt-0">
        <div id="left">
          <LeftSide />
        </div>
        <div id="right">
          <SlidFilter />
          <RightSide filtered={filteredProducts} />
        </div>
      </div>
    </>
  );
}

export default NewProductPage;
