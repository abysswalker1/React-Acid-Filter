import React, { useEffect } from 'react';
import './Filter.css';
import { Context } from './../Context';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ColorPicker from './ColorPicker';
import Options from './Options';
import domtoimage from 'dom-to-image';

export default function Filter() {
  const { deleteImage, image, updateImgList } = React.useContext(Context);
  const reference = React.useRef({});
  const [style, setStyle] = React.useState({
    mixBlendMode: 'normal',
  });

  let finalPicture;

  const savePicture = () => {
    domtoimage.toPng(finalPicture).then((url) => {
      updateImgList(url);
    });
    function boyNextDoor () {
      console.log(this)
    }
  };

  const changeFilterStyle = (style) => {
    setStyle(style);
  };

  const takeColor = (color) => {
    reference.current.style.backgroundColor = color;
  };

  const waitingForImage = new Promise((resolve, reject) => {
    setTimeout(() => {
      const img = document.getElementsByTagName('IMG')[0];
      resolve(img);
    }, 100);
  });

  useEffect(() => {
    waitingForImage.then((img) => {
      if (img) {
        reference.current.style.width = img.width + 'px';
        reference.current.style.height = img.height + 'px';
      }
    });
    finalPicture = document.querySelector('.filter__image');
  });

  if (!image) return null;

  return (
    <div className="filter">
      <div className="filter__container">
        <div className="filter__image-wrapper">
          <div className="filter__image">
            <img className="filter__image-picture" src={image.src} style={style} />
            <div ref={reference} className="lay"></div>
          </div>
          <button
            className="fiiter__delete"
            onClick={() => {
              deleteImage();
            }}>
            <i className="bi bi-trash3"></i>
          </button>
        </div>
        <div className="filter__tools">
          <div className="filter__tools-options">
            <Options func={changeFilterStyle} />
            <button onClick={() => savePicture()}>Сохранить</button>
          </div>
          <ColorPicker func={takeColor} />
        </div>
      </div>
    </div>
  );
}
