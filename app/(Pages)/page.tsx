import Category from "@/components/category/Category";
import Navbar from "@/components/navbar/Navbar";
import Slider from "@/components/slider/Slider";
import React from "react";

function HomePage() {
  return (
    <>
      <Navbar />
      <Slider />
      <Category />
    </>
  );
}

export default HomePage;
