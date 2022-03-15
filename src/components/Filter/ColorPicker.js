import React, { useCallback, useEffect } from 'react';
import iro from '@jaames/iro';

export default function ColorPicker({ func }) {
  let initialColor;

  useEffect(() => {
    const colorPicker = new iro.ColorPicker('#picker', {
      width: 200,
      color: '#f00',
    });

    colorPicker.on('color:change', () => {
      initialColor = colorPicker.color.hexString;
      func(initialColor);
    });
  }, []);

  return (
    <>
      <div id="picker"></div>
    </>
  );
}
