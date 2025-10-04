"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
const category = [
  {
    id: 1,
    image: "/pad-9-cyan-pc.webp",
    title: "Tablets",
  },
  {
    id: 2,
    image: "/honor-earbuds-open-pc.avif",
    title: "Audio",
  },
  {
    id: 3,
    image: "/product_se__cbhd710p3auq_large.png",
    title: "Wearables",
  },
  {
    id: 4,
    image: "/MGF64_FV401.png",
    title: "Accessories",
  },
];

function CategoryGrid() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="mt-14">
      <main className="min-h-screen p-4 md:p-8 lg:p-12">
        <div className="mx-auto max-w-6xl max-sm:max-w-md">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6">
            {/* Hero Product - HONOR Magic V5 */}
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="bg-white rounded-3xl overflow-hidden shadow-sm group cursor-pointer"
            >
              <div className="relative w-[500px] h-[677px] overflow-hidden">
                <Image
                  src="/innovation__ce13717o3vhy_large_2x.jpg"
                  fill
                  alt="HONOR Magic V5"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70"
                />
                <div className="text-white absolute bottom-[-35] left-12 group-hover:bottom-4 transition-all duration-500 max-sm:bottom-2">
                  <h1 className="text-4xl  text-black font-semibold">Phones</h1>
                </div>
              </div>
            </div>

            {/* Grid of 4 Products */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* HONOR X9d */}

              {category.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm group cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70"
                    />
                    <div className="text-white absolute bottom-[-30] left-4 group-hover:bottom-2 transition-all duration-500 max-sm:bottom-2">
                      <h1 className="text-2xl text-black font-semibold">
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
