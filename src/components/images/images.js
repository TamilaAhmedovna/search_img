import Image from '../image/image';

import './images.css';

const Images = (props) => {

  return (
    <div className="images">
      {props.images.map(i => {
        return <Image image={i} key={i.id}/>
      })}
    </div>
  );
}

export default Images;
