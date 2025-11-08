"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "../ui/button";
import Drawer from "@mui/material/Drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "../ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FaFilter } from "react-icons/fa";
import { LeftSideProps } from "@/types/homePage";
import { useState } from "react";

export default function SlidFilter({ onFilterChange }: LeftSideProps) {
  const categories = [
    "Mobiles",
    "Tablets",
    "Wearables",
    "Audio",
    "Accessories",
  ];
  const brands = [
    "Apple",
    "Samsung",
    "Huawei",
    "Honor",
    "Xiaomi",
    "Anker",
    "Oramio",
    "Mcdodo",
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
    onFilterChange(updated, selectedBrands);
  };

  const handleBrandChange = (brand: string) => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updated);
    onFilterChange(selectedCategories, updated);
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className="w-70 h-full p-4 dark:bg-black dark:text-white">
      <h1 className="text-2xl mb-4">Filters</h1>
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
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => handleBrandChange(brand)}
                />
                <Label className="text-md" htmlFor="terms">
                  {brand}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

  return (
    <>
      <div className="sm:hidden relative">
        <Button
          variant={"secondary"}
          onClick={toggleDrawer(true)}
          className="right-4 top-15 absolute"
        >
          <FaFilter />
        </Button>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
