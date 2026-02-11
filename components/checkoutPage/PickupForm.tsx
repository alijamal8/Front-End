import { Info } from "lucide-react";
import React from "react";
import Payment from "./Payment";
import { checkoutStore } from "@/stores/checkoutStore";
import { useTranslations } from "next-intl";


function PickupForm() {
   const t = useTranslations("checkout");
   const { shipinfoInform, setshipinfoInform } = checkoutStore();

  return (
    <div>
      <div>
        <h2 className="mb-4 mt-8 text-xl font-semibold text-gray-900 dark:text-white">
          {t("pickup_locations")}
        </h2>
        <div className="rounded-md border-2 border-cyan-500 bg-cyan-50 px-4 py-3 dark:bg-black dark:border-gray-600">
          <span className="font-medium text-gray-900 dark:text-white">
            Estore Building, Al Mansour street Bldg.21, Zakak 14, Mahalat 44,
            Baghdad
          </span>
        </div>
      </div>
      <div>
        <h2 className="mb-4 mt-8 text-xl font-semibold text-gray-900 dark:text-white">
          {t("billing_name")}
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <input
          value={shipinfoInform.first_name}
          onChange={(e) => setshipinfoInform("first_name", e.target.value)}
            type="text"
            placeholder={t("first_name")}
            className="rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
          />
          <input
          value={shipinfoInform.last_name}
          onChange={(e) => setshipinfoInform("last_name", e.target.value)}
            type="text"
            placeholder={t("last_name")}
            className="rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div className="relative mt-4">
          <input
          value={shipinfoInform.phone_number}
          onChange={(e) => setshipinfoInform("phone_number", e.target.value)}
            type="tel"
            placeholder={t("phone")}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
          />
          <Info className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        </div>
        <Payment />
      </div>
    </div>
  );
}

export default PickupForm;
