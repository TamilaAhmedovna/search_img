import { useSelector } from 'react-redux';

import './images-list.css';

const ImagesList = () => {
  const images = useSelector(state => state.images.imagesList)

  return (
    <div className="images-list">
      {images.length
        ? images.map(img => {
          return (
            <div className="images-list-item" key={img.id}>
              <img className="images-list-img" src={img.urls.small} alt="" />
            </div>
          )
        })
        : <div>...No images yet</div>
      }
    </div>
  );
}

export default ImagesList;
