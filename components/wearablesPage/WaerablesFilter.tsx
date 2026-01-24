"use client";
import React from "react";
import {
 
  watchBrandOptions,
  
  watchPriceOptions,
} from "@/filterOptions/watchFilter";
import { usePhonesFilters } from "@/stores/usePhoneFilterStore";
import { Road } from "../global/Road";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

function WaerablesFilter() {
  const filters = usePhonesFilters((state) => state.filters);
  const toggleBrand = usePhonesFilters((s) => s.toggleBrand);
  const togglePrice = usePhonesFilters((s) => s.togglePrice);
  const toggleBattery = usePhonesFilters((s) => s.toggleBattery);
  const toggleDisplay = usePhonesFilters((s) => s.toggleDisplay);

  return (
    <div>
      <div className="max-sm:p-4">
        <Road
          items={[
            { label: "Home", href: "/" },
            { label: "Waerables", href: "/waerables" },
          ]}
        />

        <div className="p-6 mt-6 bg-[#f8f9fa] dark:bg-black max-sm:hidden">
          <h1 className="text-2xl mb-4">Filters</h1>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-md">Brand</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {watchBrandOptions.map((brand) => (
                  <div key={brand} className="flex gap-3">
                    <Checkbox
                      id={`category-${brand}`}
                      checked={filters.brand.includes(brand)}
                      onCheckedChange={() => toggleBrand(brand)}
                    />
                    <Label htmlFor={`category-${brand}`} className="text-md">
                      {brand}
                    </Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-md">Price</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {watchPriceOptions.map((price) => (
                  <div key={price.label} className="flex gap-3">
                    <Checkbox
                      id={`price-${price.label}`}
                      checked={filters.price.includes(price)}
                      onCheckedChange={() => togglePrice(price)}
                    />
                    <Label htmlFor={`price-${price.label}`} className="text-md">
                      {price.label}
                    </Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-md">
                Battery Size
              </AccordionTrigger>
              {/* <AccordionContent className="flex flex-col gap-4 text-balance">
                {batteryLifeOptions.map((battery) => (
                  <div key={battery.label} className="flex gap-3">
                    <Checkbox
                      id={`battery-${battery.label}`}
                      checked={filters.battery.includes(battery)}
                      onCheckedChange={() => toggleBattery(battery)}
                    />
                    <Label
                      htmlFor={`battery-${battery.label}`}
                      className="text-md"
                    >
                      {battery.label}
                    </Label>
                  </div>
                ))}
              </AccordionContent> */}
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-md">
                Display Size
              </AccordionTrigger>
              {/* <AccordionContent className="flex flex-col gap-4 text-balance">
                {displaySizeOptions.map((dispaly) => (
                  <div key={dispaly.label} className="flex gap-3">
                    <Checkbox
                      id={`dispaly-${dispaly.label}`}
                      checked={filters.displaySize.includes(dispaly)}
                      onCheckedChange={() => toggleDisplay(dispaly)}
                    />
                    <Label
                      htmlFor={`dispaly-${dispaly.label}`}
                      className="text-md"
                    >
                      {dispaly.label}
                    </Label>
                  </div>
                ))}
              </AccordionContent> */}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default WaerablesFilter;
