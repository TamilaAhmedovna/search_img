import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './images-list.css';

const ImagesList = () => {
  const images = useSelector(state => state.images)

  return (
    <div className="images-list">
      {images.map(img => {
        return <img src={img.urls.small} alt="Photo" key={img.id} />
      })}
    </div>
  );
}

export default ImagesList;
