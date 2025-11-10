"use client";
import React, { useState, useEffect } from "react";
import Card from "../NewProductsSection/Card";
import { Separator } from "../ui/separator";
import SlidFilter from "./SlidFilter";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useProductFilterStore } from "@/stores/filterStore";
import NoResult from "../global/NoResult";

function RightSide() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const filteredProducts =useProductFilterStore((state) => state.filteredProducts);
  

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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

  return (
    <>
      <div className="mt-11 p-6 bg-[#f8f9fa] dark:bg-black max-sm:mt-0">
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-4 max-sm:text-xl">
            New Arrivals Products
          </h1>
          <p>{filteredProducts.length} products</p>
        </div>

        <Separator className="mb-8" />

        <div id="cards" className="flex flex-wrap justify-center gap-12">
          {filteredProducts.length === 0 ? (
           <NoResult/>
          ) : (
            ""
          )}
          <Card product={currentProducts} />
        </div>

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
    </>
  );
}

export default RightSide;
