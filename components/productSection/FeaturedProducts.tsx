import React from "react";
import Title from "../global/Title";
import Cards from "./Cards";
import { Button } from "../ui/button";
import { MdNavigateNext } from 'react-icons/md';


function ProductSection() {
  return (
    <>
      <div className="mx-auto text-center pb-50 mt-34 pt-5 ">
        <Title title={"Featured Products"} />
        <Cards />
        <Button variant={"link"} className="mt-14">
          <h1>Show All Products</h1>
          <MdNavigateNext/>
        </Button>
      </div>
    </>
  );
}

export default ProductSection;
