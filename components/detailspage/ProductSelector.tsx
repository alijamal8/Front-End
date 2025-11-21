"use client";
import { useProductUI } from "@/stores/colorStore";
import { Product } from "@/types/homePage";
import React from "react";
import { useState } from "react";

export default function ProductSelector({ product }: { product: Product }) {
  const [selectedStorage, setSelectedStorage] = useState(0);
  const { selectedColor, setSelectedColor, setSelectedImageIndex } =
    useProductUI();

  const handleColorClick = (index: any) => {
    setSelectedColor(index);

    setSelectedImageIndex(index);
  };

  const formattedPrice =
    product?.variants?.[selectedStorage]?.price ?? product?.price;
  return (
    <>
      <div className="max-w-lg pt-4">
        <h1 className="text-2xl font-semibold mb-10">
          Price: {formattedPrice}
        </h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Storage</h2>

          {product.variants?.length ? (
            <div className="space-y-3">
              {product.variants.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStorage(index)}
                  className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-colors ${
                    selectedStorage === index
                      ? "border-blue-500"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <span className="text-lg font-semibold">
                    {option.storage}GB
                  </span>
                  <span className="text-lg font-semibold">${option.price}</span>
                </button>
              ))}
            </div>
          ) : (
            <button className="w-full flex items-center justify-between p-4 rounded-lg border-2 transition-colors border-blue-500">
              {product.specifications[1]?.value}GB
            </button>
          )}
        </div>
      </div>

      {/* Color Section */}
      <div className="pb-6">
        <h2 className="text-xl font-semibold mb-4">Color</h2>
        <p className="text-base font-medium mb-4">
          {product.images[selectedColor].color_name}
        </p>
        <div className="flex gap-4">
          {product.images.map((option, index) => (
            <div key={index} className="flex flex-col items-center">
              <button
                onClick={() => handleColorClick(index)}
                className={`w-16 h-16 rounded-full border-4 transition-all ${
                  selectedColor === index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: option.color_hex }}
                aria-label={option.color_name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
