import React from 'react';

const People = (props) => {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8437 7.875C18.7064 9.78141 17.2922 11.25 15.75 11.25C14.2078 11.25 12.7912 9.78188 12.6562 7.875C12.5156 5.89172 13.8923 4.5 15.75 4.5C17.6076 4.5 18.9844 5.92781 18.8437 7.875Z"
        stroke={props.color || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7501 14.25C12.6952 14.25 9.75756 15.7673 9.02162 18.7223C8.92412 19.1133 9.16928 19.5 9.571 19.5H21.9296C22.3313 19.5 22.5751 19.1133 22.479 18.7223C21.743 15.72 18.8054 14.25 15.7501 14.25Z"
        stroke={props.color || 'currentColor'}
        strokeMiterlimit="10"
      />
      <path
        d="M9.37495 8.71594C9.26527 10.2384 8.12245 11.4375 6.89058 11.4375C5.65871 11.4375 4.51402 10.2389 4.40621 8.71594C4.29418 7.13203 5.40652 6 6.89058 6C8.37464 6 9.48698 7.16109 9.37495 8.71594Z"
        stroke={props.color || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.65622 14.3439C8.81013 13.9563 7.87825 13.8072 6.8906 13.8072C4.4531 13.8072 2.10466 15.0189 1.51638 17.3791C1.43903 17.6913 1.63497 18.0002 1.9556 18.0002H7.21872"
        stroke={props.color || 'currentColor'}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default People;
