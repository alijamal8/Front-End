import { usePhonesFilters } from "@/stores/usePhoneFilterStore";
import React from "react";
import {
  brandOptions,
  priceOptions,
  batteryLifeOptions,
  typeOptions,
} from "@/filterOptions/audioFilter";

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

export default function AudioFilter() {
  const filters = usePhonesFilters((state) => state.filters);
  const toggleBrand = usePhonesFilters((s) => s.toggleBrand);
  const togglePrice = usePhonesFilters((s) => s.togglePrice);
  const toggleBattery = usePhonesFilters((s) => s.toggleBattery);
  const toggleType = usePhonesFilters((s) => s.toggleType);
  const t = useTranslations("AccessoriesPage");
  const ta = useTranslations("audioPage");

  const filterContent = (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">{t("Brand")}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {brandOptions.map((brand) => (
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
          <AccordionTrigger className="text-md">
            {t("ProductType")}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {typeOptions.map((type) => (
              <div key={type.value} className="flex gap-3">
                <Checkbox
                  id={`category-${type.value}`}
                  checked={filters.type.includes(type.value)}
                  onCheckedChange={() => toggleType(type.value)}
                />

                <Label htmlFor={`category-${type.value}`} className="text-md">
                  {ta(type.label)}
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
            {priceOptions.map((price) => (
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
            {t("Battery Size")}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {batteryLifeOptions.map((battery) => (
              <div key={battery.label} className="flex gap-3">
                <Checkbox
                  id={`battery-${battery.label}`}
                  checked={filters.battery.includes(battery)}
                  onCheckedChange={() => toggleBattery(battery)}
                />
                <Label htmlFor={`battery-${battery.label}`} className="text-md">
                  {ta(battery.label)}
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
            { label: "Audio", href: "/audio" },
          ]}
        />

        <div className="mt-4 lg:hidden">
          <MobileFilterSheet title={t("Filter")}>{filterContent}</MobileFilterSheet>
        </div>

        <div className="hidden lg:block p-6 mt-6 bg-[#f8f9fa] dark:bg-black">
          <h1 className="text-2xl mb-4">Filters</h1>
          {filterContent}
        </div>
      </div>
    </div>
  );
}
