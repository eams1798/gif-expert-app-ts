import { useState } from 'react';
import { EventAddCategory, HookSetCategories } from '../../types/types';

type PropAddCategory = {onNewCategory: ( newCategory: string ) => void}

const AddCategory = ({onNewCategory}: PropAddCategory) => {
  const [inputValue, setInputValue] = useState<string>('');

  const addCategory: EventAddCategory = (e) => {
    e.preventDefault();

    const trimmedValue: string = inputValue.trim();

    if (trimmedValue) {
      onNewCategory(trimmedValue);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={(e)=>addCategory(e)}>
      <input 
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
      <input type="submit" value="Add"/>
    </form>)
}

export default AddCategory;