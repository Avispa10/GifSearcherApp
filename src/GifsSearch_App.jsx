import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Gifgrid } from "./components/Gifgrid";

export const GifsSearch_App = () => {
  const [categories, setCategories] = useState(["River Plate"]);
  console.log(categories);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);

    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  /* const onAddwithButton = () => {
    setCategories([...categories, "valorant"]);
  }; */

  return (
    <>
      <div className="h2">GifsSearch_App</div>
      <AddCategory onAddCategory={(valor) => onAddCategory(valor)} />
      <div>
        {categories.map((category) => (
          <Gifgrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
