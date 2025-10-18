import React from "react";
import { Button } from "../ui/button";
import { FiShoppingCart } from "react-icons/fi";
function ShopingCard() {
  return (
    <Button variant={"ghost"} className=" relative">
      <FiShoppingCart />
      {/* <span className="absolute -top-2 -right-1 bg-black text-white  rounded-full w-5 h-5  flex justify-center items-center text-sm dark:text-black dark:bg-white">
        2
      </span> */}
    </Button>
  );
}

export default ShopingCard;
