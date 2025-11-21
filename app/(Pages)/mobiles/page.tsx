
import PhonesPage from "@/components/phonesPage/PhonesPage";
import { ProductsService } from "@/services/api/product";
import React from "react";


async function page() {
  const data = await ProductsService.getProducts()
 
  return (
    <div>
      <PhonesPage initialProducts={data} />
    </div>
  );
}

export default page;
