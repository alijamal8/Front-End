import ProductDetails from "@/components/detailspage/ProductDetails";
import ProductImages from "@/components/detailspage/ProductImages";
import ProductSpecifications from "@/components/detailspage/ProductSpecifications";
import { ProductsService } from "@/services/api/product";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const product = await ProductsService.getSingleProduct(params.id);
  
  
  return (
    <>
      <div className=" mb-30 px-10 grid grid-cols-[40%_60%] mt-10  space-x-10 max-sm:grid-cols-1 max-sm:px-0 max-sm:mt-0">
        <div id="left">
          <ProductImages product={product} />
          <ProductSpecifications product={product} />
        </div>
        <div id="right">
          <ProductDetails product={product} />
        </div>
      </div>
    </>
  );
}

export default page;
