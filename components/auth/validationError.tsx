import React from "react";
import { ClientErroprops } from "@/types/auth";

function VaildationError({ type, message }: ClientErroprops) {
  const setbg = () => {
    if (type === "error") return "text-red-800 font-bold pt-2  ";
  };
  return (
    <span className={`text-xs flex items-center w-full   ${setbg()}`}>
      {type === "error" ? message : ""}
    </span>
  );
}

export default VaildationError;
