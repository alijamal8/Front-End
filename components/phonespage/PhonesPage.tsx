"use client";
import React, { useEffect } from "react";

import SideProducts from "../global/SideProducts";

import { Product } from "@/types/homePage";
import { usePhonesFilters } from "@/stores/usePhoneFilterStore";
import FilteSide from "./FilteSide";
import LeftSideFilters from "./LeftSideFilters";

import { Separator } from "../ui/separator";
import { useTranslations } from "next-intl";
import Content from "../global/Content";

function PhonesPage({ initialProducts }: { initialProducts: Product[] }) {
  const setProducts = usePhonesFilters((state) => state.setProducts);
  const t = useTranslations("category");
  const pageT = useTranslations("pageContent");

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
        <div className="mt-11 p-6 bg-[#f8f9fa] dark:bg-black max-sm:mt-0">
          <div className="mb-4">
            <Content
              title={pageT("phones.title")}
              description={pageT("phones.description")}
            />

            <p className="mb-4 font-bold">
              ({filtered.length}) {t("products")}
            </p>
          </div>
          <Separator className="mb-8" />

          <SideProducts filtered={filtered} />
        </div>
        <FilteSide />
      </div>
    </div>
  );
}

export default PhonesPage;
