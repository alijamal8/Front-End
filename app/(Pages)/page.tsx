import Category from "@/components/category/Category";
import Navbar from "@/components/navbar/Navbar";
import ProductSection from "@/components/productSection/FeaturedProducts";
import Slider from "@/components/slider/Slider";
import React from "react";

async function HomePage() {
  return (
    <>
      <Navbar />
      <Slider />
      <Category />
      <ProductSection/>
    </>
  );
}

export default HomePage;
