import { GIF } from '../interfaces/GIF';
import { myGIF } from '../interfaces/myGIF';

const getGifs = async( category: string, apiKey: string ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data }: { data: GIF[]} = await response.json();
  
    const gifs: myGIF[] = data.map( gif => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }));
  
    return gifs;
};

export default getGifs;