import React from "react";
import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async () => {
    //obtengo los gifs de la categoria
    const imgs = await getGifs(category);

    setImages(imgs);
    setisLoading(false);
  };

  useEffect(() => {
    // se activa segun los llamados dentro del array. Por mas que renderice el componente
    getImages();

    /* return () => {   
    } */
  }, []);

  return {
    images,
    isLoading,
  };
};
