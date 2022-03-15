import React, { useEffect } from 'react';
import { Context } from '../Context';
import './droper.css';

export default function Droper() {
  const { loadImage, image } = React.useContext(Context);

  useEffect(() => {
    const dropZone = document.querySelector('.droper__dropzone');
    let file;

    document.addEventListener('dragover', (ev) => ev.preventDefault());
    document.addEventListener('drop', (ev) => ev.preventDefault());

    if (dropZone) {
      dropZone.addEventListener('drop', (ev) => {
        ev.preventDefault();
        file = ev.dataTransfer.files[0];
        handleFile(file);
      });
    }

    const handleFile = (file) => {
      if (file.type === 'text/html' || file.type === 'text/css' || file.type === 'text/javascript')
        return;

      if (file.type === 'application/pdf') {
        return;
      }

      const type = file.type.replace(/\/.+/, '');

      const createImage = (file) => {
        const imageEl = document.createElement('img');
        imageEl.src = URL.createObjectURL(file);
        loadImage(imageEl);
      };

      if (type === 'image') {
        createImage(file);
      } else return;
    };
  });

  if (image) return null;

  return (
    <div className="droper">
      <div className="droper__dropzone">
        <div className="droper__dropzone-text">Перетащите Фото</div>
        <i className="bi bi-box-arrow-in-down"></i>
      </div>
    </div>
  );
}
