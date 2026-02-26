import { Info } from "lucide-react";
import React from "react";
import Payment from "./Payment";
import { checkoutStore } from "@/stores/checkoutStore";
import { useTranslations } from "next-intl";

interface ShipFormProps {
  errors: Record<string, string | undefined>;
}

function ShipForm({ errors }: ShipFormProps) {
  const t = useTranslations("checkout");
  const { shipinfoInform, setshipinfoInform } = checkoutStore();

  return (
    <>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <input
          value={shipinfoInform.first_name}
          onChange={(e) => setshipinfoInform("first_name", e.target.value)}
          type="text"
          placeholder={t("first_name")}
          className={`rounded-md border bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400 ${
            errors.first_name
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
          }`}
        />
        <input
          value={shipinfoInform.last_name}
          onChange={(e) => setshipinfoInform("last_name", e.target.value)}
          type="text"
          placeholder={t("last_name")}
          className={`rounded-md border bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400 ${
            errors.last_name
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
          }`}
        />
      </div>
      {(errors.first_name || errors.last_name) && (
        <div className="mt-2 space-y-1">
          {errors.first_name && (
            <p className="text-sm text-red-600">{errors.first_name}</p>
          )}
          {errors.last_name && (
            <p className="text-sm text-red-600">{errors.last_name}</p>
          )}
        </div>
      )}

      <input
        value={shipinfoInform.address}
        onChange={(e) => setshipinfoInform("address", e.target.value)}
        type="text"
        placeholder={t("address")}
        className={`mt-4 w-full rounded-md border bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400 ${
          errors.address
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
        }`}
      />
      {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address}</p>}

      <input
        value={shipinfoInform.apartment}
        onChange={(e) => setshipinfoInform("apartment", e.target.value)}
        type="text"
        placeholder={t("apartment")}
        className="mt-4 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
      />

      <div className="mt-4 grid grid-cols-1 gap-4">
        <input
          value={shipinfoInform.city}
          onChange={(e) => setshipinfoInform("city", e.target.value)}
          type="text"
          placeholder={t("city")}
          className={`rounded-md border bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400 ${
            errors.city
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
          }`}
        />
      </div>
      {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city}</p>}

      <div className="relative mt-4">
        <input
          value={shipinfoInform.phone_number}
          onChange={(e) => setshipinfoInform("phone_number", e.target.value)}
          type="tel"
          placeholder={t("phone")}
          className={`w-full rounded-md border bg-white px-4 py-3 pr-10 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400 ${
            errors.phone_number
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
          }`}
        />
        <Info className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      </div>
      {errors.phone_number && (
        <p className="mt-2 text-sm text-red-600">{errors.phone_number}</p>
      )}

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          {t("shipping_method")}
        </h2>
        <div className="flex mb-4 items-center justify-between rounded-md border-2 border-cyan-500 bg-cyan-50 px-4 py-3 dark:bg-cyan-950">
          <span className="font-medium text-gray-900 dark:text-white">
            {t("delivery_title")}
          </span>
          <span className="font-semibold text-gray-900 dark:text-white">
            5000 IQD
          </span>
        </div>
        <Payment errors={errors} />
      </div>
    </>
  );
}

export default ShipForm;
