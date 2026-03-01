"use client";
import React from "react";
import {
  batteryLifeOptions,
  watchBrandOptions,
  displaySizeOptions,
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
import { useTranslations } from "next-intl";
import MobileFilterSheet from "../global/MobileFilterSheet";

function WaerablesFilter() {
  const filters = usePhonesFilters((state) => state.filters);
  const toggleBrand = usePhonesFilters((s) => s.toggleBrand);
  const togglePrice = usePhonesFilters((s) => s.togglePrice);
  const toggleBattery = usePhonesFilters((s) => s.toggleBattery);
  const toggleDisplay = usePhonesFilters((s) => s.toggleDisplay);
  const t = useTranslations("AccessoriesPage");

  const filterContent = (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">{t("Brand")}</AccordionTrigger>
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
          <AccordionTrigger className="text-md">{t("Price")}</AccordionTrigger>
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
          <AccordionTrigger className="text-md">{t("Battery Size")}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {batteryLifeOptions.map((battery) => (
              <div key={battery.label} className="flex gap-3">
                <Checkbox
                  id={`battery-${battery.label}`}
                  checked={filters.battery.includes(battery)}
                  onCheckedChange={() => toggleBattery(battery)}
                />
                <Label htmlFor={`battery-${battery.label}`} className="text-md">
                  {battery.label}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">{t("Display Size")}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {displaySizeOptions.map((displaysize) => (
              <div key={displaysize.label} className="flex gap-3">
                <Checkbox
                  id={`displaysize-${displaysize.label}`}
                  checked={filters.displaySize.includes(displaysize)}
                  onCheckedChange={() => toggleDisplay(displaysize)}
                />
                <Label htmlFor={`displaysize-${displaysize.label}`} className="text-md">
                  {displaysize.label}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );

  return (
    <div>
      <div className="max-lg:p-4">
        <Road
          items={[
            { label: "Home", href: "/" },
            { label: "Waerables", href: "/waerables" },
          ]}
        />

        <div className="mt-4 lg:hidden">
          <MobileFilterSheet title={t("Filter")}>{filterContent}</MobileFilterSheet>
        </div>

        <div className="hidden lg:block p-6 mt-6 bg-[#f8f9fa] dark:bg-black">
          <h1 className="text-2xl mb-4">{t("Filter")}</h1>
          {filterContent}
        </div>
      </div>
    </div>
  );
}

export default WaerablesFilter;
