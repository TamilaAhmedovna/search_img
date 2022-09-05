import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './search.css';
import { interval } from '../../config/config';
import getImages from '../../services/api/get-images';
import { saveImages } from '../../store/images-slice';

let timeoutId

const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const getImagesList = async val => {
    const images = await getImages(val)

    dispatch(saveImages(images))
  }

  const handleOnChange = val => {
    clearTimeout(timeoutId)
    setValue(val)
    if (!val) return null;
    timeoutId = setTimeout(getImagesList, interval, val)
  }

  return (
    <input
      type="text"
      value={value}
      placeholder="Type image name.."
      className="search"
      onChange={e => handleOnChange(e.target.value)}
      autoFocus
    />
  );
}

export default Search;
