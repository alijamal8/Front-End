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

import { Sliders } from "@/types/homePage";
import { sliserService } from "@/services/api/slider";
import { getTranslations, getLocale } from "next-intl/server";

const sliders2 = [
  {
    id: 1,
    title: "Xiaomi 15T Pro",
    description:
      "Masterpieces far closer, Leica 5x Pro telephone Spotlight Photography, Leoca Summilux optical lens",
    image_url: "/slider/43ae224614d1cd4bd3d99d187ef0feca.webp",
    position: "left",
    text_color: "black",
    button_label: "Learn More",
  },
  {
    id: 2,
    title: "Galaxy Watch 8 Classic",
    description:
      "Built to perform. Designed to impress.,Your every command, right on your wrist,Unlock the secrets to better sleep",
    image_url:
      "/slider/SCOMB7Q7-376_Watch8-Classic-Lifestyle-PCD-KV-DT-1440x640.webp",
    position: "right",
    text_color: "white",
    button_label: "Learn More",
  },

  {
    id: 3,
    title: "HONOR 400 Series",
    description:
      "Al 200MP Ultra-Clear Al Camera ,Super Zoom Further See Clearer.",
    image_url: "/slider/400-gold-400-pro-grey-pc.avif",
    position: "left",
    text_color: "black",
    button_label: "Learn More",
  },

  {
    id: 4,
    title: "HONOR Magic 7 RSR",
    description:
      "Snapdragon® 8 Elite Mobile Platform ,Unrivaled Performance Unmatched Speed.",
    image_url: "/slider/honor-magic7-rsr-pc.avif",
    position: "right",
    text_color: "white",
    button_label: "Learn More",
  },
];

// ... existing imports

async function Slider() {
  const sliders: Sliders[] = await sliserService.getSliders();
  const t = await getTranslations("home");
  const locale = await getLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div>
      <Carousel opts={{ direction: dir }} className="w-full">
        <CarouselContent>
          {sliders2.map((item, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className="p-0 border-0">
                  <CardContent className="flex p-0 relative m-0 aspect-square items-center justify-center max-w-[1700px] h-[800px] bg-0 max-sm:max-w-[500px] max-sm:max-h-[500px] xl:max-w-[2200px]">
                    <Link href={""}>
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        quality={100}
                      />
                    </Link>
                    <div
                      className={`absolute flex flex-col justify-center ${
                        item.position === "left"
                          ? `left-30 max-sm:left-5 text-left items-start ${
                              dir === "rtl" ? "items-end text-right" : ""
                            }`
                          : `right-40 max-sm:right-5 text-right items-end ${
                              dir === "rtl" ? "items-start text-left" : ""
                            }`
                      } bottom-80 max-sm:bottom-20 max-lg:bottom-20 ${
                        item.text_color === "black"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      <h1 className="text-5xl font-bold max-sm:text-2xl mb-4">
                        {item.title}
                      </h1>

                      <div className="text-sm py-4 ">
                        {item.description.split(",").map((line, index) => (
                          <p
                            key={index}
                            className={`block text-2xl max-sm:text-sm mb-1 ${item.position === "left" ? "text-left" : "text-right"}`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>

                      <Button
                        size={"lg"}
                        variant={"secondary"}
                        className="mt-4 px-8 cursor-pointer max-sm:px-4 w-fit"
                      >
                        {t("slider")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {dir === "rtl" ? (
          <>
            <CarouselNext className="absolute left-5 top-1/2 -translate-y-1/2 max-sm:hidden z-10 rotate-180 right-auto" />
            <CarouselPrevious className="absolute right-5 top-1/2 -translate-y-1/2 max-sm:hidden z-10 rotate-180 left-auto" />
          </>
        ) : (
          <>
            <CarouselPrevious className="absolute left-5 top-1/2 -translate-y-1/2 max-sm:hidden z-10" />
            <CarouselNext className="absolute right-5 top-1/2 -translate-y-1/2 max-sm:hidden z-10" />
          </>
        )}
      </Carousel>
    </div>
  );
}

export default Slider;
