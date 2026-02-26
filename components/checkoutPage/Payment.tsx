"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { checkoutStore } from "@/stores/checkoutStore";
import { useTranslations } from "next-intl";

interface PaymentProps {
  errors: Record<string, string | undefined>;
}

function Payment({ errors }: PaymentProps) {
  const t = useTranslations("checkout");
  const { shipinfoInform, setshipinfoInform, payment_method, setPaymentMethod } =
    checkoutStore();

  return (
    <div>
      <h2 className="mb-4 mt-8 text-xl font-semibold text-gray-900 dark:text-white">
        {t("payment_title")}
      </h2>

      <Select value={payment_method} onValueChange={(value) => setPaymentMethod(value)}>
        <SelectTrigger
          className={`mb-4 w-full py-6 ${errors.payment_method ? "border-red-500 focus:ring-red-500" : ""}`}
        >
          <SelectValue placeholder={t("cod")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="cash">{t("cod")}</SelectItem>
            <SelectItem value="card">{t("credit_card")}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {errors.payment_method && (
        <p className="mt-2 text-sm text-red-600">{errors.payment_method}</p>
      )}

      {payment_method === "card" && (
        <div className="mt-4">
          <input
            value={shipinfoInform.card_number}
            onChange={(e) => setshipinfoInform("card_number", e.target.value)}
            type="text"
            placeholder={t("card_number")}
            className={`w-full rounded-md border bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400 ${
              errors.card_number
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
            }`}
          />
          {errors.card_number && (
            <p className="mt-2 text-sm text-red-600">{errors.card_number}</p>
          )}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <input
              value={shipinfoInform.card_cvv}
              onChange={(e) => setshipinfoInform("card_cvv", e.target.value)}
              type="text"
              placeholder={t("cvv")}
              className={`rounded-md border bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400 ${
                errors.card_cvv
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              }`}
            />
            <input
              value={shipinfoInform.card_expiration_date}
              onChange={(e) =>
                setshipinfoInform("card_expiration_date", e.target.value)
              }
              type="date"
              placeholder={t("expiry_date")}
              className={`rounded-md border bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400 ${
                errors.card_expiration_date
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              }`}
            />
          </div>
          {(errors.card_cvv || errors.card_expiration_date) && (
            <div className="mt-2 space-y-1">
              {errors.card_cvv && (
                <p className="text-sm text-red-600">{errors.card_cvv}</p>
              )}
              {errors.card_expiration_date && (
                <p className="text-sm text-red-600">{errors.card_expiration_date}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Payment;
