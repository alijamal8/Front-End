"use client";
import * as React from "react";

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
import {
  batteryOptions,
  brandOptions,
  cameraOptions,
  displaySizeOptions,
  priceOptions,
  ramOptions,
  storageOptions,
} from "@/filterOptions/mobilsFilter";
import { usePhonesFilters } from "@/stores/usePhoneFilterStore";

function FilteSide() {
  const filters = usePhonesFilters((state) => state.filters);
  const toggleBrand = usePhonesFilters((s) => s.toggleBrand);
  const togglePrice = usePhonesFilters((s) => s.togglePrice);
  const toggleRam = usePhonesFilters((s) => s.toggleRam);
  const toggleStorage = usePhonesFilters((s) => s.toggleStorage);
  const toggleCamera = usePhonesFilters((s) => s.toggleCamera);
  const toggleBattery = usePhonesFilters((s) => s.toggleBattery);
  const toggleDisplay = usePhonesFilters((s) => s.toggleDisplay);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <div className="w-70 h-full p-4 dark:bg-black dark:text-white">
      <h1 className="text-2xl mb-4">Filters</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">Brand</AccordionTrigger>
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
          <AccordionTrigger className="text-md">Price</AccordionTrigger>
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
          <AccordionTrigger className="text-md">RAM</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {ramOptions.map((ram) => (
              <div key={ram} className="flex gap-3">
                <Checkbox
                  id={`ram-${ram}`}
                  checked={filters.ram.includes(ram)}
                  onCheckedChange={() => toggleRam(ram)}
                />
                <Label htmlFor={`ram-${ram}`} className="text-md">
                  {ram}GB
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">Storage Size</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {storageOptions.map((storage) => (
              <div key={storage} className="flex gap-3">
                <Checkbox
                  id={`storage-${storage}`}
                  checked={filters.storage.includes(storage)}
                  onCheckedChange={() => toggleStorage(storage)}
                />
                <Label htmlFor={`storage-${storage}`} className="text-md">
                  {storage}GB
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">
            Camera Resolution
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {cameraOptions.map((camera) => (
              <div key={camera.label} className="flex gap-3">
                <Checkbox
                  id={`camera-${camera.label}`}
                  checked={filters.camera.includes(camera)}
                  onCheckedChange={() => toggleCamera(camera)}
                />
                <Label htmlFor={`camera-${camera.label}`} className="text-md">
                  {camera.label}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">Battery Size</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {batteryOptions.map((battery) => (
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
          <AccordionTrigger className="text-md">Display Size</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {displaySizeOptions.map((dispaly) => (
              <div key={dispaly.label} className="flex gap-3">
                <Checkbox
                  id={`dispaly-${dispaly.label}`}
                  checked={filters.displaySize.includes(dispaly)}
                  onCheckedChange={() => toggleDisplay(dispaly)}
                />
                <Label htmlFor={`dispaly-${dispaly.label}`} className="text-md">
                  {dispaly.label}
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
          className="right-4 -top-725 absolute"
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

export default FilteSide;
