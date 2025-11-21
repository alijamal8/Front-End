import NewProductPage from "@/components/NewProductPage/NewProductPage";
import { ProductsService } from "@/services/api/product";

import React from "react";

async function page() {
  const data = await ProductsService.getNewProduct();
  console.log(data);
  return <NewProductPage initialProducts={data} />;
}

export default page;
