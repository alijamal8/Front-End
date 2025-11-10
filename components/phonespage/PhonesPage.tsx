"use client";
import React, { useEffect } from "react";
import LeftSideFilters from "./LeftSideFilters";
import SideProducts from "./SideProducts";

import { Product } from "@/types/homePage";
import { usePhonesFilters } from "@/stores/usePhoneFilterStore";
import FilteSide from "./FilteSide";

function PhonesPage({ initialProducts }: { initialProducts: Product[] }) {
  const setProducts = usePhonesFilters((state) => state.setProducts);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);
  return (
    <div className="px-10 grid grid-cols-[22%_78%] mt-10 space-x-10 max-sm:grid-cols-1 max-sm:px-0 max-sm:mt-0">
      <div id="left">
        <LeftSideFilters />
      </div>
      <div id="right">
        <SideProducts />
       <FilteSide/>
      </div>
    </div>
  );
}

export default PhonesPage;
