import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

function EmptyCart() {
  const t = useTranslations("cart");
  return (
    <div className="h-[90vh] dark:bg-black bg-[#f8f9fa] flex-col flex justify-center items-center">
      <div>
        <h1 className="mb-8 text-4xl font-bold text-black dark:text-white">
          {t("title_empty")}
        </h1>
      </div>
      <Button className="text-white text-lg w-xs p-6 mt-10 dark:text-black">
        <Link href={"/"}>{t("continue_shopping")}</Link>
      </Button>
    </div>
  );
}

export default EmptyCart;
