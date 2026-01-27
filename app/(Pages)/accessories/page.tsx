import AccessoriesPage from "@/components/accessoriesPage/AccessoriesPage";
import { ProductsService } from "@/services/api/product";
import React from "react";

async function page() {
  const data = await ProductsService.getCategoryProduct("Accessories");
  console.log(data);
  return (
    <>
      <AccessoriesPage initialProducts={data} />
    </>
  );
}

export default page;
