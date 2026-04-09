"use client";

import { FormEvent, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { IoCloseOutline } from "react-icons/io5";

import { Input } from "@/components/ui/input";
import { Propsclose } from "@/types/navbar";
import { Button } from "../ui/button";

export default function Searchbar({ onClose }: Propsclose) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const params = useParams();
  const t = useTranslations("navbar");
  const locale = typeof params.locale === "string" ? params.locale : "ar";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    router.push(`/${locale}/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-3xl items-center gap-2 px-1 sm:px-2"
    >
      <Button type="submit" variant="ghost" size="icon" aria-label={t("search")}>
        <Search className="size-5" />
      </Button>

      <Input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={t("search")}
        className="h-10 min-w-0 flex-1"
        autoFocus
      />

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={onClose}
        aria-label="close-search"
      >
        <IoCloseOutline className="size-6" />
      </Button>
    </form>
  );
}
