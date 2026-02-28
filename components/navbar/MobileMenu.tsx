"use client";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "../global/LanguageSwitcher";
import { ModeToggle } from "../global/ModeToggle";
import Logo from "./Logo";

export default function MobileMenu() {
  const t = useTranslations("navbar");
  const categories = [
    { name: "mobiles", link: "/mobiles" },
    { name: "tablets", link: "/tablets" },
    { name: "wearables", link: "/wearables" },
    { name: "audio", link: "/audio" },
    { name: "accessories", link: "/accessories" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="max-lg:block hidden p-1 sm:p-2 rounded-md focus:outline-none">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open main menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[85vw] max-w-[400px] flex flex-col p-6">
        <SheetHeader>
          <SheetTitle className="text-left mt-4"><Logo /></SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 mt-6 flex-1">
          <div className="flex flex-col gap-4">
            {categories.map((category) => (
              <SheetTrigger asChild key={category.name}>
                <Link href={`${category.link}`}>
                  <div className="font-medium text-lg border-b pb-2 hover:text-gray-500 transition-colors">
                    {t(category.name)}
                  </div>
                </Link>
              </SheetTrigger>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-auto pt-4 border-t">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">Language</span>
            <LanguageSwitcher />
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">Theme</span>
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
