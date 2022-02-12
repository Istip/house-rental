import React from 'react';

const HeartEmpty = (props) => {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5431 3.75C13.5 3.75 12 6.75 12 6.75C12 6.75 10.5 3.75 7.45687 3.75C4.98374 3.75 3.0253 5.81906 2.99999 8.28797C2.94843 13.4128 7.06546 17.0573 11.5781 20.1202C11.7025 20.2048 11.8495 20.2501 12 20.2501C12.1505 20.2501 12.2975 20.2048 12.4219 20.1202C16.9341 17.0573 21.0511 13.4128 21 8.28797C20.9747 5.81906 19.0162 3.75 16.5431 3.75Z"
        stroke={props.color || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartEmpty;
