"use client";
import { Input } from "@/components/ui/input";
import Searchicon from "./Searchicon";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { Propsclose } from "@/types/navbar";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
export default function Searchbar({ onClose }: Propsclose) {
  const t = useTranslations("navbar");
  return (
    <>
      <div className="max-w-xl mx-auto px-8 flex flex-row-reverse max-sm:max-w-sm max-sm:flex max-sm:justify-center">
        <Input
          type="search"
          placeholder={t("search")}
          className="min-w-lg max-sm:min-w-xs"
        />
        <Button variant={"ghost"}>
          <Search className="hover:cursor-pointer border-0 size-5" />
        </Button>
        <div className="absolute ltr:right-10 rtl:left-146 mr-6 max-sm:right-0">
          <Button variant={"ghost"} onClick={onClose}>
            <IoCloseOutline className="size-6" />
          </Button>
        </div>
      </div>
    </>
  );
}
