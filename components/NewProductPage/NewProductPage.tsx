"use client";
import React, { useEffect, useState } from "react";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import { Product } from "@/types/homePage";
import SlidFilter from "./SlidFilter";
import { useProductFilterStore } from "@/stores/filterStore";

function NewProductPage({ initialProducts }: { initialProducts: Product[] }) {


  const { filteredProducts, handleFilterChange } = useProductFilterStore();

  const setProducts = useProductFilterStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);

  return (
    <>
      <div className="px-10 grid grid-cols-[22%_78%] mt-10 space-x-10 max-sm:grid-cols-1 max-sm:px-0 max-sm:mt-0">
        <div id="left">
          <LeftSide onFilterChange={handleFilterChange} />
        </div>
        <div id="right">
          <SlidFilter onFilterChange={handleFilterChange} />

          <RightSide filteredProducts={filteredProducts} />
        </div>
      </div>
    </>
  );
}

export default NewProductPage;
