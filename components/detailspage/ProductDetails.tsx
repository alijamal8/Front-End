import React from "react";
import Rating from "../NewProductsSection/Rating";
import ProductSelector from "./ProductSelector";
import Quantity from "./Quantity";
import { Product } from "@/types/homePage";

function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="ml-15 max-sm:m-4">
      <div className="mt-10 space-y-4">
        <h1 className="text-4xl font-semibold">{product.name}</h1>
        <Rating rate={product.rating} />
        <p className="text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          dolorum. Corrupti reprehenderit eligendi quasi corporis? Blanditiis
          facilis nostrum rerum molestias dolorem excepturi eaque velit quam,
          minima, voluptatibus vitae itaque voluptas.
          {/* {product.description} */}
        </p>

        <ProductSelector product={product} />
        <Quantity />
      </div>
    </div>
  );
}

export default ProductDetails;
