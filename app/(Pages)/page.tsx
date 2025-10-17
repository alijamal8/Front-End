import Category from "@/components/category/Category";
import Navbar from "@/components/navbar/Navbar";
import Slider from "@/components/slider/Slider";
import { getSliders } from "@/services/api/slider";
import React from "react";

async function HomePage() {
  return (
    <>
      <Navbar />
      <Slider />
      <Category />
    </>
  );
}

export default HomePage;
