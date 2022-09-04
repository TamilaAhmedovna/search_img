import { useState } from 'react';
import './search.css';

const Search = () => {
  const [value, setValue] = useState('')
  const handleOnChange = val => {
    console.log(val)
    setValue(val)
  }

  return (
    <input 
      type="text"
      value={value} 
      placeholder="Type image name.." 
      className="search"
      onChange={e => handleOnChange(e.target.value)} 
    />
  );
}

export default Search;
