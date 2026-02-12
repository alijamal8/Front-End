
import GamingPage from "@/components/gamingPage/GamingPage";
import { ProductsService } from "@/services/api/product";

import React from "react";

async function page() {
  const data = await ProductsService.getNewProduct("gaming");
  console.log(data);
  return <GamingPage initialProducts={data} />;
}

export default page;

