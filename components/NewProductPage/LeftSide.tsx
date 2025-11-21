"use client";

import { Road } from "../global/Road";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "../ui/label";
import { useProductFilterStore } from "@/stores/filterStore";
export const categories = [
  "Mobiles",
  "Tablets",
  "Wearables",
  "Audio",
  "Accessories",
];
export const brands = [
  "Apple",
  "Samsung",
  "Huawei",
  "Honor",
  "Xiaomi",
  "Anker",
  "Oramio",
  "Mcdodo",
];

function LeftSide() {
  const {
    selectedCategories,
    selectedBrands,
    handleCategoryChange,
    handleBrandChange,
  } = useProductFilterStore();

  return (
    <>
      <div className="max-sm:p-4">
        <Road
          items={[
            { label: "Home", href: "/" },
            { label: "New Products", href: "/newproduct" },
          ]}
        />
      </div>

      <div className="p-6 mt-6 bg-[#f8f9fa] dark:bg-black max-sm:hidden">
        <h1 className="text-2xl mb-4">Filters</h1>

        {/* Category Filter */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-md">Category</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {categories.map((category) => (
                <div key={category} className="flex gap-3">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={`category-${category}`} className="text-md">
                    {category}
                  </Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Brand Filter */}
        <Accordion type="single" collapsible className="w-full mt-4">
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-md">Brand</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {brands.map((brand) => (
                <div key={brand} className="flex gap-3">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => handleBrandChange(brand)}
                  />
                  <Label htmlFor={`brand-${brand}`} className="text-md">
                    {brand}
                  </Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default LeftSide;
