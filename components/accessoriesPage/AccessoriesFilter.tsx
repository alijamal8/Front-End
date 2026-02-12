import { usePhonesFilters } from "@/stores/usePhoneFilterStore";
import React from "react";
import { brandOptions, priceOptions } from "@/filterOptions/audioFilter";
import { typeProductOptions } from "@/filterOptions/accessories";
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

function AccessoriesFilter() {
  const filters = usePhonesFilters((state) => state.filters);
  const toggleBrand = usePhonesFilters((s) => s.toggleBrand);
  const togglePrice = usePhonesFilters((s) => s.togglePrice);
  const toggleType = usePhonesFilters((s) => s.toggleType);

  const t = useTranslations("AccessoriesPage");
  const t2 = useTranslations("audioPage");
  return (
    <div>
      <div className="max-sm:p-4">
        <Road
          items={[
            { label: "Home", href: "/" },
            { label: "Accessories", href: "/accessories" },
          ]}
        />

        <div className="p-6 mt-6  dark:bg-black max-sm:hidden">
          <h1 className="text-2xl mb-4">{t("Filter")}</h1>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-md">
                {t("Brand")}
              </AccordionTrigger>
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
                {typeProductOptions.map((type) => (
                  <div key={type.value} className="flex gap-3">
                    <Checkbox
                      id={`category-${type.value}`}
                      checked={filters.type.includes(type.value)}
                      onCheckedChange={() => toggleType(type.value)}
                    />
                    <Label
                      htmlFor={`category-${type.value}`}
                      className="text-md"
                    >
                      {t2(type.label)}
                    </Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-md">
                {t("Price")}
              </AccordionTrigger>
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
        </div>
      </div>
    </div>
  );
}

export default AccessoriesFilter;
