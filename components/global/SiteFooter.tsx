"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const content = {
  en: {
    brand: "ESTORE",
    brandDescription:
      "Premium tech store for mobiles, tablets, wearables, audio, and accessories.",
    shopTitle: "Shop",
    supportTitle: "Support",
    featured: "Featured Products",
    newest: "New Arrivals",
    mobiles: "Mobiles",
    tablets: "Tablets",
    wearables: "Wearables",
    audio: "Audio",
    accessories: "Accessories",
    cart: "Shopping Cart",
    checkout: "Checkout",
    orders: "Orders",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    crafted: "Crafted for smooth shopping.",
  },
  ar: {
    brand: "ESTORE",
    brandDescription:
      "متجر تقني متكامل للموبايلات، التابلت، الساعات الذكية، الصوتيات، والإكسسوارات.",
    shopTitle: "التسوق",
    supportTitle: "الدعم",
    featured: "المنتجات المميزة",
    newest: "أحدث المنتجات",
    mobiles: "الموبايلات",
    tablets: "التابلت",
    wearables: "الأجهزة القابلة للارتداء",
    audio: "الصوتيات",
    accessories: "الإكسسوارات",
    cart: "سلة التسوق",
    checkout: "الدفع",
    orders: "الطلبات",
    contactTitle: "التواصل",
    rights: "جميع الحقوق محفوظة.",
    crafted: "مصمم لتجربة تسوق سلسة.",
  },
};

export default function SiteFooter() {
  const locale = useLocale();
  const t = locale === "ar" ? content.ar : content.en;

  const shopLinks = [
    { label: t.featured, href: "/featuredproducts" },
    { label: t.newest, href: "/newproduct" },
    { label: t.mobiles, href: "/mobiles" },
    { label: t.tablets, href: "/tablets" },
    { label: t.wearables, href: "/wearables" },
    { label: t.audio, href: "/audio" },
    { label: t.accessories, href: "/accessories" },
  ];

  const supportLinks = [
    { label: t.orders, href: "/orders" },
    { label: t.cart, href: "/shoppingcart" },
    { label: t.checkout, href: "/checkout" },
  ];

  return (
    <footer className="mt-16 border-t border-zinc-200/80 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="text-2xl font-bold tracking-wider text-zinc-900 dark:text-white">
              {t.brand}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-600 dark:text-zinc-400">{t.brandDescription}</p>
            <div className="mt-5 flex items-center gap-2">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-300 dark:hover:text-zinc-100"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-900 dark:text-zinc-100">
              {t.shopTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {shopLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-zinc-950 dark:hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-900 dark:text-zinc-100">
              {t.supportTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {supportLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-zinc-950 dark:hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-900 dark:text-zinc-100">
              {t.contactTitle}
            </h3>

            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Tech Street, Sana'a
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +967 777 123 456
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                support@estore.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:text-zinc-400">
          <p>
            {new Date().getFullYear()} ESTORE. {t.rights}
          </p>
          <p>{t.crafted}</p>
        </div>
      </div>
    </footer>
  );
}
