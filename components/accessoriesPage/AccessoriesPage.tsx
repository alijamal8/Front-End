"use client";
import { usePhonesFilters } from "@/stores/usePhoneFilterStore";
import { Product } from "@/types/homePage";
import { useEffect } from "react";
import AccessoriesFilter from "./AccessoriesFilter";
import SideProducts from "../global/SideProducts";

function AccessoriesPage({ initialProducts }: { initialProducts: Product[] }) {
  const setProducts = usePhonesFilters((state) => state.setProducts);
  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);
  const filtered = usePhonesFilters((state) => state.filtered);
  return (
    <>
      <div className="px-10 grid grid-cols-[22%_78%] mt-10 space-x-10 max-sm:grid-cols-1 max-sm:px-0 max-sm:mt-0">
        <div id="left">
          <AccessoriesFilter />
        </div>
        <div id="right">
          <SideProducts filtered={filtered} />
        </div>
      </div>
    </>
  );
}

export default AccessoriesPage;
