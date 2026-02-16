"use client";
import React from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Propsclick } from "@/types/navbar";

function Searchicon({ onClick }: Propsclick) {
  return (
    <Button onClick={onClick} variant={"ghost"}>
      <Search className="hover:cursor-pointer border-0 size-5" />
    </Button>
  );
}

export default Searchicon;
