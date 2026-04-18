"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import NoResult from "./NoResult";
import Card from "./Card";
import { Product } from "@/types/homePage";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SideProducts({ filtered }: { filtered: Product[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const locale = useLocale();
  const initialPageParam = Number(searchParams.get("page") ?? "1");
  const initialPage =
    Number.isFinite(initialPageParam) && initialPageParam > 0
      ? initialPageParam
      : 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filtered.slice(startIndex, startIndex + itemsPerPage);
  const t = useTranslations("category");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const goToPage = (page: number) => {
    const safePage = Math.min(Math.max(page, 1), totalPages);
    const params = new URLSearchParams(searchParams.toString());

    if (safePage === 1) {
      params.delete("page");
    } else {
      params.set("page", String(safePage));
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    setCurrentPage(safePage);
  };

  const handlePageClick = (page: number) => {
    goToPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };
  const segments = pathname.split("/").filter(Boolean);
  const pageSegments = segments[0] === locale ? segments.slice(1) : segments;

  const currentPageSlug = pageSegments[0];
  const fallbackCategorySlug = filtered[0]?.category?.name
    ?.toLowerCase()
    .replace(/\s+/g, "");
  const link = currentPageSlug || fallbackCategorySlug || "mobiles";

  const buildPageHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    return `?${params.toString()}`;
  };

  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

  return (
    <>
      <div id="cards" className="flex flex-wrap justify-center gap-12">
        {filtered.length === 0 ? <NoResult /> : ""}
        <Card product={currentProducts} from={link} />
      </div>
      {/*  {link}  */}
      <Separator className="mt-8" />
      <Pagination className="mt-4 flex justify-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer text-md"
              href={buildPageHref(prevPage)}
              onClick={(event) => {
                event.preventDefault();
                handlePrevious();
              }}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                href={buildPageHref(index + 1)}
                onClick={(event) => {
                  event.preventDefault();
                  handlePageClick(index + 1);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              className="cursor-pointer text-md"
              href={buildPageHref(nextPage)}
              onClick={(event) => {
                event.preventDefault();
                handleNext();
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default SideProducts;
