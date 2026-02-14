import React from "react";
import { useTranslations } from "next-intl";

function Content({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  //   const t = useTranslations("");
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 max-sm:text-xl">{title}</h1>
      <p className="mb-4 text-muted-foreground">{description}</p>
    </>
  );
}

export default Content;
