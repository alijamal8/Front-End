import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

import { Product, Sliders } from "@/types/homePage";
import { sliserService } from "@/services/api/slider";
import { ProductsService } from "@/services/api/product";
import { getTranslations, getLocale } from "next-intl/server";

const sliderProductAliases: Record<string, string> = {
  "HONOR 400 Series": "HONOR 400",
  "HONOR Magic 7 RSR": "HONOR Magic7",
};

function normalizeTitle(value: string) {
  return value.trim().toLowerCase();
}

function findMatchingProduct(slider: Sliders, products: Product[]) {
  const sliderTitle = normalizeTitle(slider.title);
  const aliasTitle = sliderProductAliases[slider.title];
  const normalizedAliasTitle = aliasTitle ? normalizeTitle(aliasTitle) : null;

  return products.find((product) => {
    const productTitle = normalizeTitle(product.name);

    return (
      productTitle === sliderTitle ||
      (normalizedAliasTitle !== null && productTitle === normalizedAliasTitle)
    );
  });
}

async function Slider() {
  const [sliders, mobileProducts, watchProducts] = await Promise.all([
    sliserService.getSliders(),
    ProductsService.getCategoryProduct("Mobiles"),
    ProductsService.getCategoryProduct("Watches"),
  ]);

  const sliderProducts: Product[] = [...mobileProducts, ...watchProducts];
  const t = await getTranslations("home");
  const locale = await getLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div>
      <Carousel opts={{ direction: dir }} className="w-full">
        <CarouselContent>
          {sliders.map((item: Sliders, index: number) => {
            const matchedProduct = findMatchingProduct(item, sliderProducts);
            const productHref = matchedProduct
              ? `/${locale}/product/${matchedProduct.category.name.toLowerCase()}/${matchedProduct.id}`
              : null;

            return (
              <CarouselItem key={item.id}>
                <div>
                  <Card className="w-full overflow-hidden border-0 p-0">
                    <CardContent className="relative m-0 flex h-[50vh] w-full items-center justify-center bg-none p-0 max-sm:h-[60vh] lg:h-[800px]">
                      {productHref ? (
                        <Link href={productHref} className="block h-full w-full">
                          <Image
                            src={item.image_url}
                            alt={item.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            quality={100}
                          />
                        </Link>
                      ) : (
                        <div className="block h-full w-full">
                          <Image
                            src={item.image_url}
                            alt={item.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            quality={100}
                          />
                        </div>
                      )}

                      <div
                        className={`absolute flex flex-col justify-center ${
                          item.position === "left"
                            ? `left-30 max-sm:left-5 text-left items-start ${
                                dir === "rtl" ? "items-end text-right" : ""
                              }`
                            : `right-40 max-sm:right-5 text-right items-end ${
                                dir === "rtl" ? "items-start text-left" : ""
                              }`
                        } bottom-80 max-lg:bottom-20 max-sm:bottom-20 ${
                          item.text_color === "black" ? "text-black" : "text-white"
                        }`}
                      >
                        <h1 className="mb-4 text-5xl font-bold max-sm:text-2xl">
                          {item.title}
                        </h1>

                        <div className="py-4 text-sm">
                          {item.description.split(",").map((line, lineIndex) => (
                            <p
                              key={lineIndex}
                              className={`mb-1 block text-2xl max-sm:text-sm ${
                                item.position === "left" ? "text-left" : "text-right"
                              }`}
                            >
                              {line}
                            </p>
                          ))}
                        </div>

                        {productHref ? (
                          <Link href={productHref}>
                            <Button
                              size={"lg"}
                              variant={"secondary"}
                              className="mt-4 w-fit cursor-pointer px-8 max-sm:px-4"
                            >
                              {t("slider")}
                            </Button>
                          </Link>
                        ) : (
                          <Button
                            size={"lg"}
                            variant={"secondary"}
                            disabled
                            className="mt-4 w-fit cursor-not-allowed px-8 opacity-70 max-sm:px-4"
                          >
                            {t("slider")}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {dir === "rtl" ? (
          <>
            <CarouselNext className="absolute left-5 top-1/2 z-10 right-auto -translate-y-1/2 rotate-180 max-sm:hidden" />
            <CarouselPrevious className="absolute right-5 top-1/2 z-10 left-auto -translate-y-1/2 rotate-180 max-sm:hidden" />
          </>
        ) : (
          <>
            <CarouselPrevious className="absolute left-5 top-1/2 z-10 -translate-y-1/2 max-sm:hidden" />
            <CarouselNext className="absolute right-5 top-1/2 z-10 -translate-y-1/2 max-sm:hidden" />
          </>
        )}
      </Carousel>
    </div>
  );
}

export default Slider;
