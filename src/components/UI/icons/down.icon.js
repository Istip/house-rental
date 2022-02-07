import React from 'react';

const Down = (props) => {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25 8.625L12 15.375L18.75 8.625"
        stroke={props.color || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Down;
