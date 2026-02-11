import React from "react";
import Title from "../global/Title";
import CategoryGrid from "./CategoryGrid";
import { useTranslations } from "next-intl";




function Category() {
  const t = useTranslations("home");
  return (
    <>
    <div className="mx-auto text-center mt-34 ">
      <Title title={t("title")} />
      <CategoryGrid/>
    </div>
    </>
  );
}

export default Category;
