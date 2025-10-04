import React from "react";
import Title from "./Title";
import CategoryGrid from "./CategoryGrid";




function Category() {
  return (
    <>
    <div className="mx-auto text-center mt-24  pb-20 ">
      <Title title="Explore Top Products By Category" />
      <CategoryGrid/>
    </div>
    
    </>
  );
}

export default Category;
