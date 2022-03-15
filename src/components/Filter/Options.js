import React from 'react';

export default function Options({ func }) {
  const changeStyle = (e) => {
    let style = {
      mixBlendMode: e.target.value,
    };
    func(style);
  };

  return (
    <select 
      className = 'form-select'
      onClick={(e) => {
        changeStyle(e);
      }}>
      <option value="normal">Без фильтра</option>
      <option value="difference">Негатив</option>
      <option value="multiply">Монохром</option>
      <option value="darken">Туман</option>
      <option value="color-burn">Выжигание</option>
    </select>
  );
}
