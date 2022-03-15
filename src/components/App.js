import React, {useEffect} from 'react';
import './App.css';
import Droper from './Droper/Droper';
import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import { Context } from './Context';

export default function App() {
  const [image, setImage] = React.useState();
  const [imgList, setImgList] = React.useState(
      JSON.parse(window.localStorage.getItem('imgList')) || []
  );

  document.addEventListener('dragover', (ev) => ev.preventDefault());
  document.addEventListener('drop', (ev) => ev.preventDefault());

  useEffect(() => {
    window.localStorage.setItem('imgList', JSON.stringify(imgList));
  }, [imgList]);

  const imgData = Object.assign([], imgList)

  const loadImage = (image) => {
    setImage(image);
  };

  const deleteImage = () => {
    setImage(null);
  };

  const updateImgList = (item) => {
    setImgList(() => {
      imgData.push(item);
      return imgData;
    });
  };

  const removeImageFromImgList = (num) => {
    setImgList(() => {
      imgData.splice(num, 1)
      return imgData
    })   
  }

  return (
    <Context.Provider value={
        { loadImage, deleteImage, image, updateImgList, imgList, removeImageFromImgList }
    }>
      <div className="app">
        <h1>React Acid Filter</h1>
        <Droper />
        <Filter />
        <Gallery />
      </div>
    </Context.Provider>
  );
}
