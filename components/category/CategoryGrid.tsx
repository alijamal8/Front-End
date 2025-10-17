"use client";
import { categoryService } from "@/services/api/category";
import { Category } from "@/types/homePage";
import { useQuery } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
import { SkeletonCard } from "./SkeletonCard";

const category2 = [
  {
    id: 2,
    image_url: "/category/innovation__ce13717o3vhy_large_2x.jpg",
    title: "Phones",
    text_color: "black",
  },

  {
    id: 2,
    image_url: "/category/pad-9-cyan-pc.webp",
    text_color: "black",
    title: "Tablets",
  },
  {
    id: 3,
    image_url: "/category/honor-earbuds-open-pc.avif",
    title: "Audio",
    text_color: "black",
  },
  {
    id: 4,
    image_url: "/category/product_se__cbhd710p3auq_large.png",
    title: "Wearables",
    text_color: "black",
  },
  {
    id: 5,
    image_url: "/category/MGF64_FV401.png",
    title: "Accessories",
    text_color: "black",
  },
];

function CategoryGrid() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery<Category[], Error>({
    queryKey: ["category"],
    queryFn: categoryService.getCategory,
  });

  // if (isLoading) return <SkeletonCard />;
  // if (isError) return <SkeletonCard />;

  return (
    <div className="mt-14">
      <main className="min-h-screen p-4 md:p-8 lg:p-12">
        <div className="mx-auto max-w-6xl max-sm:max-w-md">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6">
            {/* Hero Product - أول منتج */}
            {category2 && category2.length > 0 && (
              <div
                data-aos="fade-down"
                data-aos-duration="3000"
                className="bg-white rounded-3xl overflow-hidden shadow-sm group cursor-pointer"
              >
                <div className="relative w-[500px] h-[677px] overflow-hidden">
                  <Image
                    src={category2[0].image_url}
                    fill
                    alt={category2[0].title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70"
                  />
                  <div className="text-white absolute bottom-[-35] left-12 group-hover:bottom-4 transition-all duration-500 max-sm:bottom-2">
                    <h1
                      className={`text-4xl font-semibold ${
                        category2[0].text_color === "black"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      {category2[0].title}
                    </h1>
                  </div>
                </div>
              </div>
            )}

            {/* باقي المنتجات */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {category2 &&
                category2.slice(1).map((card, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm group cursor-pointer"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={card.image_url}
                        alt={card.title}
                        fill
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70"
                      />
                      <div className="text-white absolute bottom-[-30] left-4 group-hover:bottom-2 transition-all duration-500 max-sm:bottom-2">
                        <h1
                          className={`${
                            card.text_color === "black"
                              ? "text-black"
                              : "text-white"
                          } text-2xl font-semibold`}
                        >
                          {card.title}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CategoryGrid;
