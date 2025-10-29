import LeftSide from "@/components/NewProductPage/LeftSide";
import RightSide from "@/components/NewProductPage/RightSide";
import { Road } from "@/components/NewProductPage/Road";
import React from "react";

function page() {
  return (
    <div className="px-10 grid grid-cols-[22%_78%] mt-10 space-x-10 max-sm:grid-cols-1 max-sm:px-0 max-sm:mt-0">
      <div id="left">
        <LeftSide />
      </div>
      <div id="right">
        <RightSide />
      </div>
    </div>
  );
}

export default page;
