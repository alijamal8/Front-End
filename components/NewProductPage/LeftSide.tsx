import React from "react";
import { Road } from "./Road";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "../ui/label";

const categories = ["Phones", "Tablets", "Wearables", "Audio", "Accessories"];
const brands = [
  "Apple",
  "Samsung",
  "Huawei",
  "Honor",
  "Xiaomi",
  "Anker",
  "Havit",
  "Mcdodo",
];
function LeftSide() {
  return (
    <>
      <div className=" max-sm:p-4">
        <Road
          items={[
            { label: "Home", href: "/" },
            { label: "New Products", href: "/newproduct" },
          ]}
        />
      </div>

      <div className=" p-6 mt-6 bg-[#f8f9fa] dark:bg-black max-sm:hidden">
        <h1 className="text-2xl mb-4">Filters</h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-md">Category</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {categories.map((category) => (
                <div key={category} className="flex gap-3">
                  <Checkbox id="terms" />
                  <Label className="text-md" htmlFor="terms">
                    {category}
                  </Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-md">Brand</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {brands.map((brand) => (
                <div key={brand} className="flex gap-3">
                  <Checkbox id="terms" />
                  <Label className="text-md" htmlFor="terms">
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
