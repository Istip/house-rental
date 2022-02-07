import React from 'react';

const Logo = (props) => {
  return (
    <svg
      width={props.size || 92}
      height={props.size || 92}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="52"
        width="20"
        height="40"
        fill={props.color || 'currentColor'}
      />
      <rect
        x="24"
        y="52"
        width="20"
        height="40"
        fill={props.color || 'currentColor'}
      />
      <rect
        y="83"
        width="20"
        height="44"
        transform="rotate(-90 0 83)"
        fill={props.color || 'currentColor'}
      />
      <rect
        x="48"
        y="83"
        width="20"
        height="44"
        transform="rotate(-90 48 83)"
        fill={props.color || 'currentColor'}
      />
      <rect
        x="48"
        y="52"
        width="20"
        height="40"
        fill={props.color || 'currentColor'}
      />
      <rect
        x="72"
        y="52"
        width="20"
        height="40"
        fill={props.color || 'currentColor'}
      />
      <path d="M92 48H0L46 0L92 48Z" fill={props.color || 'currentColor'} />
    </svg>
  );
};

export default Logo;
