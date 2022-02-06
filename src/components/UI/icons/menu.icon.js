import React from 'react';

const Menu = (props) => {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 7.5H20.25"
        stroke={props.color || 'currentColor'}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M3.75 12H20.25"
        stroke={props.color || 'currentColor'}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M3.75 16.5H20.25"
        stroke={props.color || 'currentColor'}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Menu;
