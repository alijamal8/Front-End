"use client";
import { Input } from "@/components/ui/input";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { Propsclose } from "@/types/navbar";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Searchbar({ onClose }: Propsclose) {
  const t = useTranslations("navbar");

  return (
    <div className="mx-auto flex w-full max-w-3xl items-center gap-2 px-1 sm:px-2">
      <Button variant="ghost" size="icon" aria-label={t("search")}>
        <Search className="size-5" />
      </Button>

      <Input
        type="search"
        placeholder={t("search")}
        className="h-10 min-w-0 flex-1"
        autoFocus
      />

      <Button variant="ghost" size="icon" onClick={onClose} aria-label="close-search">
        <IoCloseOutline className="size-6" />
      </Button>
    </div>
  );
}
