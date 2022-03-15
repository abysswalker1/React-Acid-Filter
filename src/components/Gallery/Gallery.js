import React, { useEffect } from 'react';
import './gallery.css'
import { Carousel } from './carousel/Carousel';
import Composition from './composition/composition';
import { Context } from '../Context';

export default function Gallery() {
  const { imgList, removeImageFromImgList } = React.useContext(Context);
  const [compositions, setCompositions] = React.useState([]);

  useEffect(() => {
    setCompositions(
      imgList.map((item, index) => {
        return (
          <Composition 
              key={index} 
              id = {index}
              src={item} 
              style={null} 
              removeImg={removeImageFromImgList} 
          />
        );
      }),
    );
  }, [imgList]);

  if (imgList.length === 0) return null

  return (
    <div className = "gallery">
      <h1 className = "gallery-tittle">Галерея</h1>

      <Carousel>{compositions}</Carousel>
    </div>
  );
}
