"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbNavProps {
  items: { label: string; href?: string }[];
}

type Locale = "ar" | "en";

const roadLabels: Record<string, { en: string; ar: string }> = {
  home: { en: "Home", ar: "الرئيسية" },
  mobiles: { en: "Mobiles", ar: "الموبايلات" },
  tablets: { en: "Tablets", ar: "التابلت" },
  wearables: { en: "Wearables", ar: "الأجهزة القابلة للارتداء" },
  waerables: { en: "Wearables", ar: "الأجهزة القابلة للارتداء" },
  watches: { en: "Wearables", ar: "الأجهزة القابلة للارتداء" },
  audio: { en: "Audio", ar: "الصوتيات" },
  accessories: { en: "Accessories", ar: "الإكسسوارات" },
  "new products": { en: "New Products", ar: "المنتجات الجديدة" },
  "new arrivals": { en: "New Products", ar: "المنتجات الجديدة" },
  featured: { en: "Featured Products", ar: "المنتجات المميزة" },
  "featured products": { en: "Featured Products", ar: "المنتجات المميزة" },
  "gaming products": { en: "Gaming Products", ar: "منتجات الألعاب" },
  product: { en: "Product", ar: "المنتج" },
  cart: { en: "Cart", ar: "السلة" },
  "shopping cart": { en: "Shopping Cart", ar: "سلة التسوق" },
  orders: { en: "Orders", ar: "الطلبات" },
  checkout: { en: "Checkout", ar: "الدفع" },
};

function normalizeLabel(label: string) {
  return label.trim().toLowerCase().replace(/\s+/g, " ");
}

function localizeLabel(label: string, locale: Locale) {
  const normalized = normalizeLabel(label);
  const translated = roadLabels[normalized];
  if (translated) return translated[locale];
  return label;
}

export function Road({ items }: BreadcrumbNavProps) {
  const locale = (useLocale() === "ar" ? "ar" : "en") as Locale;

  return (
    <Breadcrumb className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-950/80">
      <BreadcrumbList className="gap-2 text-xs sm:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={`${item.label}-${index}`}>
              <BreadcrumbItem>
                {isLast || !item.href ? (
                  <BreadcrumbPage className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {localizeLabel(item.label, locale)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href} className="font-medium text-zinc-600 dark:text-zinc-300">
                      {localizeLabel(item.label, locale)}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator className="text-zinc-400 dark:text-zinc-500" />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
