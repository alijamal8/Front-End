"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useAuthStore } from "@/stores/authStore";

export default function Links() {
  const t = useTranslations('navbar');
  const user = useAuthStore((state) => state.user);
  const categories = [
    { name: "mobiles", link: "/mobiles" },
    { name: "tablets", link: "/tablets" },
    { name: "wearables", link: "/wearables" },
    { name: "audio", link: "/audio" },
    { name: "accessories", link: "/accessories" },
  ];
    
  return (
    <>
      <div className="flex gap-8 max-lg:hidden">
        {categories.map((category) => (
          <Link key={category.name} href={`${category.link}`}>
            <h1 className="font-semibold">{t(category.name)}</h1>
          </Link>
        ))}
        {user?.role === "admin" && (
          <Link href="http://127.0.0.1:8000/admin">
            <h1 className="font-semibold">{t("admin")}</h1>
          </Link>
        )}
      </div>
    </>
  );

  
}
