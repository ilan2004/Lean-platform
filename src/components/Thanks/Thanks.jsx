import React from 'react';
import './Thanks.css';

const Thanks = ({ text1, text2 }) => {
  return (
    <div className="thanks-container">
      <span>{text1}</span>
      <br />
      {text2 && <span>{text2}</span>}
    </div>
  );
};

export default Thanks;
