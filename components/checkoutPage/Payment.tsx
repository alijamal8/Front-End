"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { checkoutStore } from "@/stores/checkoutStore";
function Payment() {
  const { shipinfoInform, setshipinfoInform, payment_method, setPaymentMethod } =
    checkoutStore();

  return (
    <div>
      <h2 className="mb-4 mt-8 text-xl font-semibold text-gray-900 dark:text-white">
        Payment
      </h2>

      <Select
        value={payment_method}
        onValueChange={(value) => setPaymentMethod(value)}
      >
        <SelectTrigger className="w-full py-6 mb-4">
          <SelectValue placeholder="Cash on Delivery (COD)" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="cash">Cash on Delivery (COD)</SelectItem>
            <SelectItem value="card">Credit Card (CD)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {payment_method === "card" && (
        <div className="mt-4">
          <input
            value={shipinfoInform.card_number}
            onChange={(e) => setshipinfoInform("card_number", e.target.value)}
            type="text"
            placeholder="Card Number"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
          />
          <div className="mt-4 grid grid-cols-2 gap-4">
            <input
              value={shipinfoInform.card_cvv}
              onChange={(e) => setshipinfoInform("card_cvv", e.target.value)}
              type="text"
              placeholder="CVV"
              className="rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
            />
            <input
              value={shipinfoInform.card_expiration_date}
              onChange={(e) =>
                setshipinfoInform("card_expiration_date", e.target.value)
              }
              type="date"
              placeholder="Expiry Date"
              className="rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
