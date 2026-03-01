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
import { useTranslations } from "next-intl";
import MobileFilterSheet from "../global/MobileFilterSheet";
export const categories = [
  "Mobiles",
  "Tablets",
  "Watches",
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
  const t = useTranslations("AccessoriesPage");

  const filterContent = (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">{t("category")}</AccordionTrigger>
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

      <Accordion type="single" collapsible className="w-full mt-4">
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-md">{t("Brand")}</AccordionTrigger>
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
    </>
  );

  return (
    <>
      <div className="max-lg:p-4">
        <Road
          items={[
            { label: "Home", href: "/" },
            { label: "Gaming Products", href: "/gamingProducts" },
          ]}
        />
        <div className="mt-4 lg:hidden">
          <MobileFilterSheet title={t("Filter")}>{filterContent}</MobileFilterSheet>
        </div>
      </div>

      <div className="hidden lg:block p-6 mt-6 bg-[#f8f9fa] dark:bg-black">
        <h1 className="text-2xl mb-4">{t("Filter")}</h1>
        {filterContent}
      </div>
    </>
  );
}

export default LeftSide;
