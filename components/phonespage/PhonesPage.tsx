"use client";
import React, { useEffect, useState } from "react";

import SideProducts from "../global/SideProducts";

import { Product } from "@/types/homePage";
import { usePhonesFilters } from "@/stores/usePhoneFilterStore";
import FilteSide from "./FilteSide";
import LeftSideFilters from "./LeftSideFilters";

function PhonesPage({ initialProducts }: { initialProducts: Product[] }) {
  const setProducts = usePhonesFilters((state) => state.setProducts);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);
  const filtered = usePhonesFilters((state) => state.filtered);
  return (
    <div className="px-10 grid grid-cols-[22%_78%] mt-10 space-x-10 max-sm:grid-cols-1 max-sm:px-0 max-sm:mt-0">
      <div id="left">
        <LeftSideFilters />
      </div>
      <div id="right">
        <SideProducts filtered={filtered} />
        <FilteSide />
      </div>
    </div>
  );
}

export default PhonesPage;
