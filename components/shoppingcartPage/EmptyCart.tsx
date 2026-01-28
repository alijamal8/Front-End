import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function EmptyCart() {
  return (
    <div className="h-[90vh] dark:bg-black bg-[#f8f9fa] flex-col flex justify-center items-center">
      <div>
        <h1 className="mb-8 text-4xl font-bold text-black dark:text-white">
          Your Cart Is Currently Empty.
        </h1>
      </div>
      <Button className="text-white text-lg w-xs p-6 mt-10 dark:text-black">
        <Link href={"/"}>Continue Shopping</Link>
      </Button>
    </div>
  );
}

export default EmptyCart;
