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

function SideProducts({ filtered }: { filtered: Product[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filtered.slice(startIndex, startIndex + itemsPerPage);
const t = useTranslations("AccessoriesPage");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const link = filtered[0]?.category.name;

  return (
    <div className="mt-11 p-6 bg-[#f8f9fa] dark:bg-black max-sm:mt-0">
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-4 max-sm:text-xl">{link}</h1>
        <p>{filtered.length} {t("products")}</p>
      </div>

      <Separator className="mb-8" />

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
              onClick={handlePrevious}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              className="cursor-pointer text-md"
              onClick={handleNext}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default SideProducts;
