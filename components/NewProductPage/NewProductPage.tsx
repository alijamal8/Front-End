"use client";
import React, { useEffect } from "react";
import LeftSide from "./LeftSide";
import { Product } from "@/types/homePage";
import { useProductFilterStore } from "@/stores/filterStore";
import SideProducts from "../global/SideProducts";
import { Separator } from "../ui/separator";
import Content from "../global/Content";
import { useTranslations } from "next-intl";

function NewProductPage({ initialProducts }: { initialProducts: Product[] }) {
  const filteredProducts = useProductFilterStore(
    (state) => state.filteredProducts,
  );
  const setProducts = useProductFilterStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);
  const t = useTranslations("category");
  return (
    <>
      <div className="px-10 grid grid-cols-[22%_78%] mt-10 space-x-10 max-sm:grid-cols-1 max-sm:px-0 max-sm:mt-0">
        <div id="left">
          <LeftSide />
        </div>
        <div id="right">
          <div className="mt-11 p-6 bg-[#f8f9fa] dark:bg-black max-sm:mt-0">
            <div className="mb-4">
              <Content
                title="منتجات جديدة في السوق"
                description="استكشف قسم وصل حديثًا وتعرف على أحدث الأجهزة والتقنيات الحديثة التي تمت إضافتها إلى المتجر، بما يشمل الموبايلات والسماعات والساعات والإكسسوارات الجديدة.
"
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

export default NewProductPage;
