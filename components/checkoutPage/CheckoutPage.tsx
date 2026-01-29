"use client";
import { useState } from "react";
import { Truck, Store, Info } from "lucide-react";
import { Button } from "../ui/button";

import RightSide from "./RightSide";
import PickupForm from "./PickupForm";
import ShipForm from "./ShipForm";

export default function CheckoutPage() {
  const [deliveryMethod, setDeliveryMethod] = useState<"ship" | "pickup">(
    "ship",
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Delivery
              </h2>

              <div className="space-y-3">
                <button
                  onClick={() => setDeliveryMethod("ship")}
                  className={`flex w-full items-center justify-between rounded-md border-2 px-4 py-3 transition-all ${
                    deliveryMethod === "ship"
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-950"
                      : "border-gray-300 bg-white hover:border-gray-400 dark:border-gray-700 dark:bg-black"
                  }`}
                >
                  <span className="font-medium">Ship</span>
                  <Truck className="h-5 w-5 text-cyan-600" />
                </button>

                <button
                  onClick={() => setDeliveryMethod("pickup")}
                  className={`flex w-full items-center justify-between rounded-md border-2 px-4 py-3 transition-all ${
                    deliveryMethod === "pickup"
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-950"
                      : "border-gray-300 bg-white hover:border-gray-400 dark:border-gray-700 dark:bg-black"
                  }`}
                >
                  <span className="font-medium">Pick up from store</span>
                  <Store className="h-5 w-5" />
                </button>
              </div>

              <select className="mt-4 w-full rounded-md border px-4 py-3">
                <option>Iraq</option>
              </select>

              {deliveryMethod === "pickup" ? <PickupForm /> : <ShipForm />}

              <Button className="mt-5 w-full p-6 text-xl">Check Out</Button>
            </div>
          </div>

          <div className="lg:sticky lg:top-6 h-fit">
            <RightSide deliveryMethod={deliveryMethod} />
          </div>
        </div>
      </div>
    </div>
  );
}
