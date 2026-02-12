import Category from "@/components/category/Category";
import FeaturedSection from "@/components/featuredSection/FeaturedSection";
import GamingSection from "@/components/gamingSection/GamingSection";
import ProductSection from "@/components/NewProductsSection/NewProducts";
import Slider from "@/components/slider/Slider";
import React from "react";

async function HomePage() {
  return (
    <>
      <Slider />
      <Category />
      <ProductSection/>
      <FeaturedSection/>
      <GamingSection/>
    </>
  );
}

export default HomePage;
