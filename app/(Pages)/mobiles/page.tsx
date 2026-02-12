import PhonesPage from "@/components/phonespage/PhonesPage";
import { ProductsService } from "@/services/api/product";
import React from "react";



async function page() {
    const data = await ProductsService.getCategoryProduct("Mobiles");
  return (
    <div>
      <PhonesPage initialProducts={data} />
    </div>
  );
}

export default page;
