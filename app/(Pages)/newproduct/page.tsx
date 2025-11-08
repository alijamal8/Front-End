import NewProductPage from "@/components/NewProductPage/NewProductPage";
import { NewProductService } from "@/services/api/newproduct";
import React from "react";


async function page() {
  const data = await NewProductService.getNewProduct();
  console.log(data)
  return (
    <NewProductPage initialProducts={data}/>
  );
}

export default page;
