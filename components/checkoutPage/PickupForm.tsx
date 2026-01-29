import { Info } from "lucide-react";
import React from "react";

function PickupForm() {
  return (
    <div>
      <div>
        <h2 className="mb-4 mt-8 text-xl font-semibold text-gray-900 dark:text-white">
          Pickup locations
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
          Payment
        </h2>
        <div className="rounded-md border-2 border-cyan-500 bg-cyan-50 px-4 py-3 dark:bg-cyan-950">
          <span className="font-medium text-gray-900 dark:text-white">
            Cash on Delivery (COD)
          </span>
        </div>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-gray-900 dark:text-white">
          Billing Name
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
          />
          <input
            type="text"
            placeholder="Last name"
            className="rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div className="relative mt-4">
          <input
            type="tel"
            placeholder="Phone"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-900 placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-gray-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
          />
          <Info className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default PickupForm;
