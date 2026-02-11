import React from "react";
import Title from "../global/Title";
import { Button } from "../ui/button";
import { MdNavigateNext } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ProductsService } from "@/services/api/product";
import Card from "../global/Card";
import { getTranslations } from "next-intl/server";

async function ProductSection() {
  const data = await ProductsService.getNewProduct("new");
  const product = data.slice(0, 12);
  const t = await getTranslations("newProducts");

  return (
    <>
      <div className="mx-auto text-center pb-50 mt-34 pt-5 ">
        {/* main div  */}

        <div className="cursor-pointer group max-w-md mx-auto">
          {/* title div  */}
          <Title title={t("subtitle")} />
          <Separator className="max-w-[50px] mx-auto mt-5 cursor-pointer transition-all duration-500 bg-purple-600 group-hover:max-w-[120px]" />
        </div>

        <div id="cards" className="flex flex-wrap  p-4 pl-25 mt-24 gap-7">
          {/* cards div  */}
          <Card product={product} from="new-products" />
        </div>

        <Link href={"/newproduct"}>
          <Button variant={"link"} className="mt-14">
            {/* show all button  */}
            <h1>{t("showAll")}</h1>
            <MdNavigateNext />
          </Button>
        </Link>
      </div>
    </>
  );
}

export default ProductSection;
