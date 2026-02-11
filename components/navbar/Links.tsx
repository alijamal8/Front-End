"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Links() {
  const t = useTranslations('navbar');
  const categories = [
    { name: "mobiles", link: "/mobiles" },
    { name: "tablets", link: "/tablets" },
    { name: "wearables", link: "/wearables" },
    { name: "audio", link: "/audio" },
    { name: "accessories", link: "/accessories" },
  ];
    
  return (
    <>
      <div className="flex gap-8 max-sm:hidden max-lg:gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={`${category.link}`}>
            <h1 className="font-semibold">{t(category.name)}</h1>
          </Link>
        ))}
      </div>
    </>
  );

  
}
