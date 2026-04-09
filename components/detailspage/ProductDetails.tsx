import React from "react";
import Rating from "../global/Rating";
import ProductSelector from "./ProductSelector";
import Quantity from "./Quantity";
import { Product } from "@/types/homePage";

function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="ml-15 max-sm:m-4">
      <div className="mt-10 space-y-4">
        <h1 className="text-4xl font-semibold">{product.name}</h1>
        <Rating rate={product.rating} />
        <p className="text-lg text-muted-foreground">{product.description}</p>

        <ProductSelector product={product} />
        <Quantity product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;
