"use client";
import React, { useEffect } from "react";

import { Product } from "@/types/homePage";

import { useProductFilterStore } from "@/stores/filterStore";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Content from "../global/Content";

import SideProducts from "../global/SideProducts";
import { useTranslations } from "next-intl";
import { Separator } from "../ui/separator";

function GamingPage({ initialProducts }: { initialProducts: Product[] }) {
  const filteredProducts = useProductFilterStore(
    (state) => state.filteredProducts,
  );
  const setProducts = useProductFilterStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);

  const t = useTranslations("category");
  const pageT = useTranslations("pageContent");
  return (
    <>
      <div className="px-10 grid grid-cols-[22%_78%] mt-10 space-x-10 max-lg:grid-cols-1 max-lg:px-0 max-lg:mt-0">
        <div id="left">
          <LeftSide />
        </div>
        <div id="right">
          <div className="mt-11 p-6 bg-[#f8f9fa] dark:bg-black max-lg:mt-0">
            <div className="mb-4">
              <Content
                title={pageT("gamingProducts.title")}
                description={pageT("gamingProducts.description")}
              />
              <p className="mb-4 font-bold">
                ({filteredProducts.length}) {t("products")}
              </p>
            </div>
            <Separator className="mb-8" />

            <SideProducts filtered={filteredProducts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default GamingPage;
