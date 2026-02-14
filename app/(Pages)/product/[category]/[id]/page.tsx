import ProductDetails from "@/components/detailspage/ProductDetails";
import ProductImages from "@/components/detailspage/ProductImages";
import ProductSpecifications from "@/components/detailspage/ProductSpecifications";
import { ProductsService } from "@/services/api/product";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const product = await ProductsService.getSingleProduct(params.id);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images?.[0]?.image_url,
    brand: {
      "@type": "Brand",
      name: product.brand?.name,
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability:
        product.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

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
