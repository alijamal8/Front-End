import React from "react";
import { useTranslations } from "next-intl";

function NoResult() {
  const t = useTranslations("AccessoriesPage");
  return (
    <h1 className="text-xl my-20">{t("No items found for the selected filters")}</h1>
  );
}

export default NoResult;
