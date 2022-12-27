import apikeytxt from './apikey.txt';
import { useState, useEffect } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [apiKey, setApikey] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = ( newCategory: string ): void => {
    if (!categories.includes(newCategory)) setCategories([newCategory, ...categories]);
  }

  useEffect(() =>{
    fetch(apikeytxt)
      .then((r) => r.text())
      .then((key) => setApikey(key));
  }, []);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={ onAddCategory }
        /* setCategories={setCategories} */ />

      <ol>
        {categories.map( (category) => (
          <GifGrid key={category} category={category} apiKey={apiKey} />
          ))}
      </ol>
    </>
  )
}

export default GifExpertApp;
