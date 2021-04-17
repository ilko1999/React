/* eslint-disable react/button-has-type */
import React from 'react';
import './MyButton.css';

function MyButton(props) {
  return (
    <div>
      <button className="continueButton" {...props}>
        Continue
      </button>
    </div>
  );
}

export default MyButton;
