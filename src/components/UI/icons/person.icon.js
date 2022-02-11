import React from 'react';

const Person = (props) => {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1249 6.75C15.9412 9.22828 14.0624 11.25 11.9999 11.25C9.93742 11.25 8.05538 9.22875 7.87492 6.75C7.68742 4.17188 9.51554 2.25 11.9999 2.25C14.4843 2.25 16.3124 4.21875 16.1249 6.75Z"
        stroke={props.color || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.25C7.92187 14.25 3.7828 16.5 3.01687 20.7469C2.92452 21.2588 3.21421 21.75 3.74999 21.75H20.25C20.7862 21.75 21.0759 21.2588 20.9836 20.7469C20.2172 16.5 16.0781 14.25 12 14.25Z"
        stroke={props.color || 'currentColor'}
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Person;
