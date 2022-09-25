import React, { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const Gifgrid = ({ category }) => {
  ///custom hook
  const { images, isLoading } = useFetchGifs(category);
  //console.log(useFetchGifs(category));

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
