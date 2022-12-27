import { useState, useEffect } from "react";
import { myGIF } from '../interfaces/myGIF';
import getGifs from '../helpers/getGifs';

type useFetchGifsHook = (category: string, apiKey: string) => {
  gifs: myGIF[],
  isLoading: boolean
};

export const useFetchGifs: useFetchGifsHook = (category, apiKey) => {
  const [gifs, setGifs] = useState<myGIF[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getImages = async() => {
    const gifs = await getGifs( category, apiKey );
    setGifs(gifs);
    setIsLoading(false);
  }


  useEffect(() => {
    getImages();
  }, []);

  return {
    gifs,
    isLoading
  }
}