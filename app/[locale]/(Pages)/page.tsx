import Category from "@/components/category/Category";
import ProductSection from "@/components/NewProductsSection/NewProducts";
import Slider from "@/components/slider/Slider";
import React from "react";

async function HomePage() {
  return (
    <>
      <Slider />
      <Category />
      <ProductSection/>
    </>
  );
}

export default HomePage;
