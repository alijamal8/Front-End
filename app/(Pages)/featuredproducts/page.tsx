
import FeaturedPage from "@/components/featuredproducts/FeaturedPage";
import { ProductsService } from "@/services/api/product";

import React from "react";

async function page() {
  const data = await ProductsService.getNewProduct("featured");
  return <FeaturedPage initialProducts={data} />;
}

export default page;

