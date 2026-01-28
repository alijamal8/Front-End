"use client";

import Link from "next/link";

export default function Links() {
   const categories = [
  { name: "Mobiles", link: "/mobiles" },
  { name: "Tablets", link: "/tablets" },
  { name: "Wearables", link: "/wearables" },
  { name: "Audio", link: "/audio" },
  { name: "Accessories", link: "/accessories" }
];

  return (
    <>
      <div className="flex gap-8 max-sm:hidden max-lg:gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={`${category.link}`}>
            <h1 className="font-semibold">{category.name}</h1>
          </Link>
        ))}
      </div>
    </>
  );

  
}
