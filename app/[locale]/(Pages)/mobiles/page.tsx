import { ProductsService } from "@/services/api/product";
import React from "react";
import { Metadata } from "next";
import PhonesPage from "@/components/phonespage/PhonesPage";

export const metadata: Metadata = {
  title: "اسعار الهواتف في العراق | أحدث الموبايلات وأفضل العروض",
  description:
    "تصفح اسعار الهواتف في العراق واكتشف أحدث المبايلات مع أفضل العروض والمواصفات. قارن بين الأجهزة واختر الهاتف المناسب لك.",
};



async function page() {
    const data = await ProductsService.getCategoryProduct("Mobiles");
 
  return (
    <div>
      <PhonesPage initialProducts={data} />
    </div>
  );
}

export default page;
