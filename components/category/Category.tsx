import React from "react";
import Title from "../global/Title";
import CategoryGrid from "./CategoryGrid";




function Category() {
  return (
    <>
    <div className="mx-auto text-center mt-34 ">
      <Title title="Explore Top Products By Category" />
      <CategoryGrid/>
    </div>
    
    </>
  );
}

export default Category;
