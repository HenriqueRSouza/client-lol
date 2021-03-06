import React from 'react';

import './Button.css';

const STYLES = [
  'btn--primary',
  'btn--outine',
  'btn--transition',
  'btn--full',
  'btn--under',
];

const SIZES = ['btn--medium', 'btn--large', 'btn--circle'];

export const Button = ({
  children,
  type,
  onClick,
  buttonSize,
  buttonStyle,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      type="button"
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    >
      {children}
    </button>
  );
};
