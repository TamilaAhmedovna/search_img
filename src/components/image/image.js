import './image.css';

const Image = ({ image }) => {

  return (
    <div className="image-wrapper">
      <img
        className="image"
        src={image.urls.small}
        alt=""
      />
    </div>
  )
}

export default Image;
