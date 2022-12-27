import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

type GifGridProps = {category: string, apiKey: string};

const GifGrid = ( {category, apiKey}: GifGridProps ) => {
  const {gifs, isLoading} = useFetchGifs(category, apiKey);

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && <h2>Loading...</h2>
      }
      <div className="card-grid">
      {gifs.map((gif) => (
        <GifItem key={gif.id} {...gif}/>
      ))}
      </div>
    </>
  )
};

export default GifGrid;