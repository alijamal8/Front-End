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
import { useSearchParams } from "next/navigation";

function SideProducts({ filtered }: { filtered: Product[] }) {
  const searchParams = useSearchParams();
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

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const link = filtered[0]?.category?.name;

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
              onClick={handlePrevious}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                href={buildPageHref(index + 1)}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              className="cursor-pointer text-md"
              href={buildPageHref(nextPage)}
              onClick={handleNext}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default SideProducts;
