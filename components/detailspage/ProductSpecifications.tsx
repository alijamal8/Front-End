import { Product } from "@/types/homePage";
import React from "react";

export default function ProductSpecifications({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="w-4xl mt-70 mb-50 max-sm:w-sm max-sm:m-5 max-sm:my-15 ">
      <h2 className="text-2xl font-bold mb-8 ">Technical Specifications</h2>
      <div className="grid grid-cols-2 gap-4">
        {product.specifications?.map((spec, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {spec.name}
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  {spec.value}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
